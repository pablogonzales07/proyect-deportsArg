import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./ShopSearch.css"

const ShopSearch = ( { shopSearch } ) => {

    const [searchProduct, setSearchProduct] = useState( [] )
    
    const submitProducts = (e) => {
        e.preventDefault();
        shopSearch(searchProduct)
    }

  return (



    <div className="boxSearchConteiner">
        <div className="boxSearchTitle">
            <span>
                <h5>Buscar</h5>
            </span>
        </div>
        <div className="boxSearchForm">
            <form action="" onSubmit={ submitProducts } >
                <input 
                    type="text" 
                    placeholder="¿Que Estas Buscando?"
                    value={ searchProduct }
                    onChange={ e => setSearchProduct( e.target.value ) }
                />
                <button type="submit" >
                    <CiSearch className="iconSearch"/>
                </button>
            </form>
        </div>
    </div>
  )
}

export default ShopSearch