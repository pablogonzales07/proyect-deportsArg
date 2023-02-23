
import { useProductsContext } from "../../../context/ProductsContextProvider"
import ItemList from "../ItemList/ItemList"
import ShopCategorys from "../ShopCategorys/ShopCategorys"
import ShopLoading from "../ShopLoading/ShopLoading"
import ShopNavbar from "../ShopNavbar/ShopNavbar"
import ShopPriceFilter from "../ShopPriceFilter/ShopPriceFilter"
import ShopSearch from "../ShopSearch/ShopSearch"
import "./ItemListConteiner.css"

const ItemListConteiner = () => {
    
 const { products, loadingProducts } = useProductsContext();

 
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

            {
                  loadingProducts ? <ShopLoading /> : <ItemList products={ products } />
            }

        </article>
      </section>
    </div>
  )
}

export default ItemListConteiner