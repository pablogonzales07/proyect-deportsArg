import { useState } from "react"
import "./ShopPriceFilter.css"

const ShopPriceFilter = ( { priceSearch } ) => {

   const [ minPriceFilter, setMinPriceFilter ] = useState("")
   const [ maxPriceFilter, setMaxPriceFilter ] = useState("")
  
  const controlPriceMin = (e) => {
    setMinPriceFilter(e.target.value)
  }

  const controlPriceMax = (e) => {
    setMaxPriceFilter(e.target.value)
  }

  const submitPricesFilter = (e) => {
    e.preventDefault();
    priceSearch(maxPriceFilter, minPriceFilter)
  }


  
   
  return (

    <div className="boxPriceConteiner">
        <div className="boxPriceTitle">
            <h5>Precios</h5>
        </div>
        <div className="boxPriceForm">
            <form action="" onSubmit={ submitPricesFilter }>          
                    <input type="text" placeholder="Precio Minimo" value={ minPriceFilter } onChange={ controlPriceMin } />      
                    <input type="text" placeholder="Precio Maximo" value={ maxPriceFilter } onChange={ controlPriceMax } />
                    <button type="submit">APLICAR</button>         
            </form>
        </div>

    </div>
  )
}

export default ShopPriceFilter