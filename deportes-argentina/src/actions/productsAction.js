import { collection, getDocs, getFirestore } from "firebase/firestore";
import {  FILTER_PRICE, FILTER_PRODUCTS, GET_PRODUCTS, SEARCH_PRODUCTS } from "../types"




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

export function searchProducts( payload ) {
    return {
        type: SEARCH_PRODUCTS,
        payload
    }
}

export function filterPriceProducts( payload ) {
    return {
        type: FILTER_PRICE,
        payload
    }
}

    
