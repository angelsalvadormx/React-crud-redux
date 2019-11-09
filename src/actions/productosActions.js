import Api from "../components/api";
import {
  OBTENER_PRODUCTOS,
  ELIMINAR_PRODUCTO,
  AGREGAR_PRODUCTO,
  EDITAR_PRODUCTO
} from "../types/productosTypes";

export const obtenerProductos = () => async dispath => {
  try {
    const respuesta = await Api.list("productos");
    //console.log(respuesta);
    dispath({
      type: OBTENER_PRODUCTOS,
      payload: respuesta,
      loading: false
    });
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export const eliminarProducto = id => async dispath => {
  try {
    const respuesta = await Api.remove("productos", id);
    //console.log(respuesta);
    dispath({
      type: ELIMINAR_PRODUCTO,
      payload: respuesta
    });
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export const agregarProducto = producto => async dispath => {
  try {
    const respuesta = await Api.create("productos", producto);

    dispath({
      type: AGREGAR_PRODUCTO,
      payload: respuesta
    });
  } catch (error) {}
};

export const editarProducto = (producto, id) => async dispath => {
  try {
    const respuesta = await Api.update("productos", id, producto);
    dispath({
      type: EDITAR_PRODUCTO,
      payload: respuesta
    });
  } catch (error) {}
};
