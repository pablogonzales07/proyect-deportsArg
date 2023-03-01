import { useDispatch } from "react-redux"
import { filterProducts } from "../../../actions/productsAction"
import "./ShopCategorys.css"

const ShopCategorys = ( ) => {

   const dispatch = useDispatch()

    const onClickCategory = ( e ) => {
        const valueLink = e.target.innerHTML.toLowerCase()
        dispatch( filterProducts( { value: valueLink, filterType: "category"  } ) )
    }

  return (
    <div className="boxCategorysConteiner">
        <div className="boxCategorysTitle">
            <h5>Categorias</h5>
        </div>
        <div className="boxCategorysItem">
            <ul>
                <li>
                    <button onClick={ onClickCategory } href="" >Remera</button>
                </li>
                <li>
                    <button onClick={ onClickCategory } href="" >Pantalon</button>
                </li>
                <li>
                    <button onClick={ onClickCategory } href="" >Medias</button>
                </li>
                <li>
                    <button onClick={ onClickCategory } href="" >Buzos</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ShopCategorys