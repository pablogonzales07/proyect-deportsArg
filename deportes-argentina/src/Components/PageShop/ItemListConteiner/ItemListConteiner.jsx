import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../../actions/productsAction"
import ItemList from "../ItemList/ItemList"
import ShopCategorys from "../ShopCategorys/ShopCategorys"
import ShopNavbar from "../ShopNavbar/ShopNavbar"
import ShopPaginationProducts from "../ShopPaginationProducts/ShopPaginationProducts"
import ShopPriceFilter from "../ShopPriceFilter/ShopPriceFilter"
import ShopSearch from "../ShopSearch/ShopSearch"
import "./ItemListConteiner.css"

const ItemListConteiner = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage ] = useState(15);

  const products = useSelector(state => {
    console.log(state);
    return state.filterProducts
  
});
  const dispatch = useDispatch();

    
useEffect(() => {
  dispatch(getProducts())
}, [])

const lastPostIndex = currentPage * postPerPage;
const firstPostIndex = lastPostIndex - postPerPage;

const currentPosts = products.slice( firstPostIndex, lastPostIndex )

 
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
            { products.length && <ItemList products={ currentPosts } /> }
            <ShopPaginationProducts totalPosts={ products.length } postsPerPage={ postPerPage } setCurrentPage={ setCurrentPage } currentPage={ currentPage } />           
        </article>
      </section>
    </div>
  )
}

export default ItemListConteiner