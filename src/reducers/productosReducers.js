import { OBTENER_PRODUCTOS } from "../types/productosTypes";

const INITIAL_STATE = {
  productos: undefined,
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return { ...state, productos: action.payload, loading: action.loading };
    default:
      return state;
  }
};
