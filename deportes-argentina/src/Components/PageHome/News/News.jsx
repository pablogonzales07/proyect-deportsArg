import New from "../New/New";
import "./News.css"

const News = ( { news } ) => {

   
  return (
    <div className='indexNewsCarts'>
        
        {
            news.map(newsList => <New newsList={ newsList } /> )
        }
        

    </div>
  )
}

export default News