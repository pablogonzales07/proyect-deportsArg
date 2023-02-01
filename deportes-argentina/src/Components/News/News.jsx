import { BsFillHeartFill } from "react-icons/bs";
import "./News.css"

const News = ( { news } ) => {
   
  return (
    <div className='indexNewsCarts'>
        
        {
            news.map(noticias => {
                return  (
                                <div className='newsCartsStyle'>
                                    <img src={ noticias.img } alt="" />
                                    <div className='indexCartsText'>
                                        <h3> { noticias.title } </h3>
                                        <p> { noticias.description } </p>
                                        <div className="indexLikeBox">
                                            <div className="likeComments">
                                                <h4> <b>0</b> visualizaciones</h4>
                                                <h4> <b>0</b> comentarios</h4>
                                            </div>
                                            <BsFillHeartFill />
                                        </div>
                                    </div>       
                                </div>
                            )
                            }
            
            )
        }
        

    </div>
  )
}

export default News