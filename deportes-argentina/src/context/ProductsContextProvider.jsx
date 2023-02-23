import { collection, getDocs, getFirestore } from "firebase/firestore";
import {  useContext, useEffect, useState  } from "react"
import { ProductsContext } from "./ProductsContext"



export const useProductsContext = () => useContext(ProductsContext)

export const ProductsContextProvider = ( { children } ) => {
  
  const [products, setProducts] = useState( [  ] );
  const [filterProducts, setFilterProducts] = useState( [ ] )
  const [loadingProducts, setLoadingProducts] = useState(true)


  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "tshirtShop");
    getDocs(queryCollection)
    .then(data => setProducts( data.docs.map(product => ({ id: product.id, ...product.data() } ) ) ) )
    .catch(err => console.log(err)) 
    .finally(() => setLoadingProducts(false))
  }, []);

  


  const filterClothes = ( categoria ) => {
      const newArray = products.filter(product => product.category === categoria);
      setFilterProducts(newArray);
  }
 
  







  return (
    <ProductsContext.Provider value={ {
      products,
      loadingProducts,
      filterProducts,
      filterClothes  
    } }>
          { children }
    </ProductsContext.Provider>
  )
}

