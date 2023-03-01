import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { productsReducer } from "../reducers/productsReducer";



const store = createStore(productsReducer, applyMiddleware(thunk));

store.subscribe( () => console.log( store ) )


export default store