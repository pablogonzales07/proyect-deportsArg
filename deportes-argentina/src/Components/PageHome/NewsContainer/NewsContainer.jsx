import { collection, getDocs, getFirestore} from "firebase/firestore"
import { useState } from "react";
import { useEffect } from "react";
import FindDeports from "../FindDeports/FindDeports";
import IndexDeports from "../IndexDeports/IndexDeports";
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
                          <h2>Noticias</h2>
                          <div className="indexNews">
                            <News news={ news } />
                          </div>
                        </div>
                        <div className="indexDeports">
                          <h2>Deportes</h2>
                          <div className="indexDeportsSyle">
                            <IndexDeports  /> 
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