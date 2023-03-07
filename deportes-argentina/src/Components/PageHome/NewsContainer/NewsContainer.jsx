import { collection, getDocs, getFirestore} from "firebase/firestore"
import { useState } from "react";
import { useEffect } from "react";
import FindDeports from "../FindDeports/FindDeports";
import HomeSponsorsContainer from "../HomeSponsorsContainer/HomeSponsorsContainer";
import HomeSponsors from "../HomeSponsorsContainer/HomeSponsorsContainer";
import IndexSports from "../IndexSports/IndexSports";
import Loading from "../Loading/Loading";
import News from "../News/News";
import "./NewsContainer.css"




const NewsContainer = () => {

const [news, setNews] = useState( [] );
const [loading, setLoading] = useState(true);


useEffect ( () => {
  const db = getFirestore();
  const queryCollection = collection(db, "noticias");
  getDocs(queryCollection)
  .then(data => setNews( data.docs.map(news => ({ id: news.id, ...news.data() } ) ) ) )
  .catch(err => console.log(err))
  .finally( () => setLoading(false) )
}, [])

  return (
    <>

       {
        
        loading 
                ? <Loading />
                : 
                  <div className="indexNewsContainer">
                        <div className="indexNewsStyle">
                          <div className="titleNewsBox">
                            <img src="/assets/titleFond.png" alt="" />
                            <h2>Noticias</h2>
                          </div>                          
                          <div className="indexNews">
                            <News news={ news } />
                          </div>
                          <div>
                            <HomeSponsorsContainer />
                          </div>
                        </div>
                        <div className="indexDeports">
                        <div className="titleNewsBox">
                            <img src="/assets/titleFond.png" alt="" />
                            <h2>Deportes</h2>
                          </div>          
                          <div className="indexDeportsSyle">
                            <IndexSports  /> 
                          </div>
                          <div className="findDeports">
                            <FindDeports />
                          </div>
                        </div>
                 </div>
       }

    </>
  )
}

export default NewsContainer    