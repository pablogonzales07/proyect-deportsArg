import { FILTER_PRODUCTS, GET_PRODUCTS } from "../types";

export const initialState = {
  products: [],
  filterProducts: [],
  filters: {
    category: "",
    sport:""
  }
};

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

    default:
      return state;
  }
}
