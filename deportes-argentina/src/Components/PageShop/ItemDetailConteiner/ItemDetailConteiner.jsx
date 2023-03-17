import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import ShopDetailNavbar from "../ShopDetailNavbar/ShopDetailNavbar"
import "./ItemDetailConteiner.css"

const ItemDetailConteiner = () => {
  
  const [detailProduct, setDetailProduct] = useState( {} );
  const [loadingDetail, setLoadingDetail] = useState(true);

  const { productId } = useParams()

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "tshirtShop", productId);
    getDoc(queryDoc)
    .then(resp => setDetailProduct({ id: resp.id, ...resp.data() }))
    .catch(err => console.log(err))
    .finally(() => setLoadingDetail(false))
}, [])


  console.log(detailProduct);

  return (
    <div>
      <ShopDetailNavbar />
        
        {
            loadingDetail ? <h2>Se esta Cargando el producto</h2> : <ItemDetail detailProduct={ detailProduct } />
        }
    </div>
  )
}

export default ItemDetailConteiner