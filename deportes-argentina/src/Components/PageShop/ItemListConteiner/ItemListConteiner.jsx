import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../../actions/productsAction"
import ItemList from "../ItemList/ItemList"
import ShopCategorys from "../ShopCategorys/ShopCategorys"
import ShopNavbar from "../ShopNavbar/ShopNavbar"
import ShopPriceFilter from "../ShopPriceFilter/ShopPriceFilter"
import ShopSearch from "../ShopSearch/ShopSearch"
import "./ItemListConteiner.css"

const ItemListConteiner = () => {

  const products = useSelector(state => {
    console.log(state);
    return state.filterProducts
  
});
  const dispatch = useDispatch();

    
useEffect(() => {
  dispatch(getProducts())
}, [])



 
  return (
    <div>
      <ShopNavbar />
      <section className="boxShopConteiner">
        <article className="boxShopFilter">
          <ShopSearch />
          <ShopCategorys />
          <ShopPriceFilter />
        </article>
        <article className="boxShopProducts">     
            { products.length && <ItemList products={ products } /> }
        </article>
      </section>
    </div>
  )
}

export default ItemListConteiner