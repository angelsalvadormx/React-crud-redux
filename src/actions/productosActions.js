import Api from "../components/api";
import { OBTENER_PRODUCTOS } from "../types/productosTypes";

export const obtenerProductos = () => async dispath => {
  try {
    const respuesta = await Api.list("productos");
    console.log(respuesta);
    dispath({
      type: OBTENER_PRODUCTOS,
      payload: respuesta,
      loading: false
    });
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
