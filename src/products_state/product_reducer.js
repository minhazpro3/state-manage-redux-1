import { products_action_Types } from "./action_types";
export const initial_product_state = {
  loading: false,
  products: [],
  error: false,
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case products_action_Types.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case products_action_Types.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case products_action_Types.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
