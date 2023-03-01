import { collection, getDocs, getFirestore } from "firebase/firestore";
import { FILTER_PRODUCTS, GET_PRODUCTS } from "../types"




export function getProducts() {
    return function(dispatch) {
        const db = getFirestore();
        const queryCollection = collection(db, "tshirtShop");
        getDocs(queryCollection)
        .then(data => data.docs.map(product => ( { id: product.id, ...product.data() } ) ))
        .then(products =>{
            dispatch({ type: GET_PRODUCTS, payload: products  })
        })
        .catch(err => console.log(err))
    }
}

export function filterProducts( payload ) {
    return {       
        type: FILTER_PRODUCTS,
        payload
    }
}
    
