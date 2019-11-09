import {
  OBTENER_PRODUCTOS,
  ELIMINAR_PRODUCTO,
  AGREGAR_PRODUCTO,
  EDITAR_PRODUCTO
} from "../types/productosTypes";

const INITIAL_STATE = {
  productos: undefined,
  loading: true,
  eliminado: undefined,
  agregado: undefined,
  actualizado: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
        loading: action.loading,
        eliminado: undefined,
        agregado: undefined,
        actualizado: undefined
      };
    case ELIMINAR_PRODUCTO:
      return { ...state, eliminado: action.payload };
    case AGREGAR_PRODUCTO:
      return { ...state, agregado: action.payload };
    case EDITAR_PRODUCTO:
      return { ...state, actualizado: action.payload };
    default:
      return state;
  }
};
