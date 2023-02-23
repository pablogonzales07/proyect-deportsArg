import { useProductsContext } from "../../../context/ProductsContextProvider";
import "./ShopCategorys.css"

const ShopCategorys = ( ) => {


  return (
    <div className="boxCategorysConteiner">
        <div className="boxCategorysTitle">
            <h5>Categorias</h5>
        </div>
        <div className="boxCategorysItem">
            <ul>
                <li>
                    <button href="" >Remeras</button>
                </li>
                <li>
                    <button href="" >Pantalones</button>
                </li>
                <li>
                    <button href="" >Medias</button>
                </li>
                <li>
                    <button href="" >Buzos</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ShopCategorys