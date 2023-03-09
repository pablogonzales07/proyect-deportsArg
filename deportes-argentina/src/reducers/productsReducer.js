import {  FILTER_PRICE, FILTER_PRODUCTS, GET_PRODUCTS, SEARCH_PRODUCTS, } from "../types";

export const initialState = {
  products: [],
  filterProducts: [],
  filters: {
    category: "",
    sport:""
  },
  search: ""
};

console.log(initialState.search);

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filterProducts: action.payload,
      };

    case FILTER_PRODUCTS:
      if(action.payload.value === "inicio"){
        return {
          ...state,
          filterProducts: state.products
        }
      }

      state.filters[action.payload.filterType] = action.payload.value
       
      const filtrado = state.products.filter( 
        ( products ) =>{
            if(!state.filters.category){
                 return (state.filters.sport === products.sport )
            }
            if(!state.filters.sport){
              return (state.filters.category === products.category)
            }

            return  (state.filters.category === products.category) && (state.filters.sport === products.sport )                    
        }
      );
      return {
        ...state,
        filterProducts: filtrado,  
      };

      case SEARCH_PRODUCTS:
              
      
      const searchProductsFilter = state.products.filter(products => 
        products.name.toString().toLowerCase().includes(action.payload.toString().toLowerCase()))
        

        return {
          ...state,
          filterProducts: searchProductsFilter
        }

        case FILTER_PRICE:

         const filterProductsPrice = state.products.filter(productos => {
          console.log(productos.price);
          if(!action.payload.priceMin) {
            return (productos.price < action.payload.priceMax)
          }
          if(!action.payload.priceMax) {
            return (productos.price > action.payload.priceMin)
          }
          console.log(action.payload.priceMax);
          
          return (productos.price > action.payload.priceMin) && (productos.price < action.payload.priceMax)    
         });



 
         return {
          ...state,
          filterProducts: filterProductsPrice
         }

        
    default:
      return state;
  }
}
