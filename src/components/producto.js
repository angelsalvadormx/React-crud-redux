import React from "react";
import { Link } from "react-router-dom";

const Producto = ({ producto, onClick }) => {
  console.log(onClick);

  return (
    <div
      className="card mr-2 ml-2 mb-3 border shadow"
      style={{ width: "15rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${producto.costo}</h6>
        <p className="card-text">Categoria: {producto.categoria}</p>
        <p className="card-text">Marca: {producto.marca}</p>
        <p className="card-text">Cantidad: {producto.cantidad}</p>
        <Link
          to={"/editar-producto/" + producto.id}
          className="btn btn-primary mr-2"
        >
          Editar
        </Link>
        <button className="btn btn-danger" onClick={() => onClick(producto.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Producto;
