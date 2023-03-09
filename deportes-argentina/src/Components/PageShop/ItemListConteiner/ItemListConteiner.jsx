import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterPriceProducts, filterProducts, getProducts, searchProducts } from "../../../actions/productsAction"
import ItemList from "../ItemList/ItemList"
import ShopAlert from "../ShopAlert/ShopAlert"
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

 const onSearch = ( productSearchFilter ) => {

  if(productSearchFilter) {
    dispatch( searchProducts( productSearchFilter ) )
  }
  else {
    dispatch( searchProducts() )
  }

 }

 const onSearchPrice = ( priceMax, priceMin ) => {
  if(priceMax && priceMin){
    dispatch( filterPriceProducts( { priceMax: priceMax, priceMin: priceMin  } ) )
  }
  else if(!priceMax) {
    dispatch( filterPriceProducts( {priceMin: priceMin} ) )
  }
  else if(!priceMin){
    dispatch(filterPriceProducts( { priceMax: priceMax } ))
  }
  else {
    dispatch( filterPriceProducts() )
  }

 }


  return (
    <div>
      <ShopNavbar />
      <section className="boxShopConteiner">
        <article className="boxShopFilter">
          <ShopSearch shopSearch={ onSearch } />
          <ShopCategorys />
          <ShopPriceFilter priceSearch={ onSearchPrice } />
        </article>
        <article className="boxShopProducts">
          {
            products.length ? <ItemList products={ currentPosts } /> : <ShopAlert />
          }     
          <ShopPaginationProducts totalPosts={ products.length } postsPerPage={ postPerPage } setCurrentPage={ setCurrentPage } currentPage={ currentPage } />           
        </article>
      </section>
    </div>
  )
}

export default ItemListConteiner