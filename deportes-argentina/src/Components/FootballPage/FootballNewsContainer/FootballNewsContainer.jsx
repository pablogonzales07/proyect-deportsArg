import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore} from "firebase/firestore"
import FootballNews from "../FootballNews/FootballNews"
import "./FootballNewsContainer.css"
import DividingLane from "../../DividingLane/DividingLane"
import ResultsGame from "../ResultsGame/ResultsGame"
import FootballChampionship from "../FootballChampionship/FootballChampionship"


const titlesFootball = 
[
  {id:1 , title:"Mundial" , description: "argentina 1978 mexico 1986 qatar 2022" ,img:"https://www.lavoz.com.ar/resizer/YvO8Q1P2V2WXyWxIABNPUzl039s=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/DYYSZ2IZCRCHHLH6RDSEXCS4EI.jpg"},
  {id:2 , title:"Copa America" , description: "1921, 1925, 1927, 1929, 1937,1941, 1945, 1946, 1947, 1955, 1957,1959-I, 1991, 1993, 2021.",img:"https://1.bp.blogspot.com/-0-ioY3zJSx4/YOrud44w2PI/AAAAAAABYGc/jZ-IMH7Dvfs1LMvG3AlaTqDOCU-vIO-QQCLcBGAsYHQ/s2048/E5_dg-iWQAEUujA.jpg"},
  {id:3 , title:"Copa de Campeones Conmebol-UEFA" , description:"1993 y 2022", img:"https://pbs.twimg.com/media/FUNd4uMWQAA5Gki?format=jpg&name=4096x4096"},
  {id:4 , title:"Copa de las Confederaciones", description:"Arabia Saudita 1992 (por entonces se llamaba Copa Rey Fahad)" , img:"https://pbs.twimg.com/media/EHU3UIxWsAAEzDk.jpg"},
  {id:5 , title:"Campeonato Panamericano" , description:"1960" ,img:"https://media.taringa.net/knn/fit:550/Z3M6Ly9rbjMvMzI3MDlhZjgxYjM5NzgyMzY4MWMzOWJjYmYyMmYyYzgucG5n"},
]

const FootballNewsContainer = () => {

  const [footballNews, setFootballNews] = useState([]);


  useEffect( () => {
    const db = getFirestore();
    const queryCollection = collection(db, "footballNews");
    getDocs(queryCollection)
    .then(data => setFootballNews(data.docs.map(footballNew => (
      {id: footballNew.id, ...footballNew.data() }))))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
       <section className="footballHomeContainer">
           <article className="footballNewsContainer">
              <h1>Noticias</h1>     
              <FootballNews footballNews={ footballNews } />        
          </article>
          <article className="asideFootballStyle">
              <h3>El camino a la gloria</h3>
              <p>Somos campeones del mundo, aca te dejamos el camino a la tan ansiada
                copa mundial
              </p>
              <DividingLane />
              <div>
                <div>
                  <h6>Fase de grupos</h6>
                  <ResultsGame teamOne={ "Argentina" } teamTwo={ "Arabia Saudita"} resultOne={ 1 } resultTwo={ 2 } logoOne={"/assets/argentina.png"} logoTwo={"/assets/arabia-saudita.png"} />
                  <ResultsGame teamOne={ "Argentina" } teamTwo={ "Mexico"} resultOne={ 2 } resultTwo={ 0 } logoOne={"/assets/argentina.png"} logoTwo={"/assets/mexico.png"} />
                  <ResultsGame teamOne={ "Argentina" } teamTwo={ "Polonia"} resultOne={ 2 } resultTwo={ 0 } logoOne={"/assets/argentina.png"} logoTwo={"/assets/polonia.png"} />
                </div>
                <div>
                 <h6>Octavos de final</h6>
                 <ResultsGame teamOne={ "Argentina" } teamTwo={ "Australia"} resultOne={ 2 } resultTwo={ 1 } logoOne={"/assets/argentina.png"} logoTwo={"/assets/australia.png"} />
                </div>
                <div>
                  <h6>Cuartos de final</h6>
                  <ResultsGame teamOne={ "Argentina" } teamTwo={ "Paises Bajos"} resultOne={ 2 } resultTwo={ 2  } logoOne={"/assets/argentina.png"} logoTwo={"/assets/paises-bajos.png"} />
                </div>
                <div>
                  <h6>Semifinal</h6>
                  <ResultsGame teamOne={ "Argentina" } teamTwo={ "Croacia"} resultOne={ 3 } resultTwo={ 0 } logoOne={"/assets/argentina.png"} logoTwo={"/assets/croacia.png"} />
                </div>
                <div>
                  <h6>Final</h6>
                  <ResultsGame teamOne={ "Argentina" } teamTwo={ "Francia"} resultOne={ 3 } resultTwo={ 3  } logoOne={"/assets/argentina.png"} logoTwo={"/assets/francia.png"} />
                </div>
              </div>
              <DividingLane />
              <div>
                <FootballChampionship titlesFootball={ titlesFootball } />
              </div>
          </article>
       </section>

    </>
  )
}

export default FootballNewsContainer