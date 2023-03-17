import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ( { detailProduct } ) => {

  return (

    <div className="detailConteiner">
        <div className="detailImage">
          <img src={ detailProduct.img } alt="" />
        </div>
        <div className="detailText">
            <div className="detailTextTitle">
              <h2>{ detailProduct.name }</h2>
              <p>Producto: <b>#{ detailProduct.id }</b></p>
            </div>
            <div className="detailTextPrice">
              <p>PRECIO: <b>{ detailProduct.price }$</b></p>
              <ItemCount />
            </div>
            <div className="detailStatus">
              {
                detailProduct.status ? <h4>ESTADO: <b>En Stock</b></h4> : <h4>ESTADO: <b>Sin Stock</b></h4>
              }
            </div>
            <div className="detailTextDescription">
              <h4>DESCRIPCION:</h4>
              <p>{ detailProduct.description }</p>
            </div>
            <button>AGREGAR AL CARRITO</button>
        </div>

    </div>
  )
}

export default ItemDetail