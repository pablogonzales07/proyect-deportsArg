import "./ShopPriceFilter.css"

const ShopPriceFilter = () => {
  return (

    <div className="boxPriceConteiner">
        <div className="boxPriceTitle">
            <h5>Precios</h5>
        </div>
        <div className="boxPriceForm">
            <form action="">          
                    <input type="text" placeholder="Precio Minimo" />      
                    <input type="text" placeholder="Precio Maximo"/>         
            </form>
        </div>

    </div>
  )
}

export default ShopPriceFilter