import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import "./New.css"

const New = ( { newsList } ) => {

    const [likeCount, setLikeCount] = useState(0)
    const [oneTypeLike, setOneTypeLike] = useState(true)
    const [visualCount, setVisualCount] = useState(0)

    const addLikes = () => {
        setOneTypeLike(!oneTypeLike)

        oneTypeLike ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1)
    }

    const addVisualCount = () => {
        setVisualCount( visualCount + 1 )
        
    }

  return (
            <div className='newsCartsStyle'>
                <img src={ newsList.img } alt="" /> 
                <div className='indexCartsText'>
                    <h3 onMouseUp={ addVisualCount }> { newsList.title } </h3>
                    <p> { newsList.description } </p>
                    <div className="indexLikeBox">
                        <div className="likeComments">
                            <h4> <b>{ visualCount }</b> visualizaciones</h4>
                            <h4> <b>0</b> comentarios</h4>
                        </div>
                        <div className="likeCountStyle">
                            <BsFillHeartFill onClick={ addLikes }  className= "likeButton"  />
                            <b> { likeCount } </b>
                        </div>                      
                    </div>
                </div>       
            </div>
  )
}

export default New