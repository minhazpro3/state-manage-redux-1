import { actionTypes } from "./action.types";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  term: false,
  qty: 0,
  education: "",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: [action.payload.value],
      };
    case actionTypes.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };
    case actionTypes.INCREMENT:
      return {
        ...state,
        qty: state.qty + action.payload,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        qty: state.qty - action.payload,
      };

    default:
      return state;
  }
};
