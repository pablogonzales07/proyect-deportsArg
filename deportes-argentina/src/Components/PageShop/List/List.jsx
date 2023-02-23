import "./List.css"
import { Link } from 'react-router-dom'

const List = ( {product} ) => {

  return (

    <div className="cards">
        <img className="cardsImg" src={ product.img }/>
        <div className="cardsBody">
            <h3 className="cardsTitle">{ product.name }</h3>
            <b className="cardsPrice">{ product.price }$</b>
            <Link to={`/detail/${product.id}`}>
                <button className="cardsButtons">DETALLE</button>
            </Link>
        </div>
    </div>
  )
}

export default List