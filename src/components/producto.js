import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as productosActions from "../actions/productosActions";

class Producto extends Component {
  //console.log(onClick);

  render() {
    console.log(this.props);
    return (
      <div
        className="card mr-2 ml-2 mb-3 border shadow"
        style={{ width: "15rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">{this.props.producto.nombre}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            ${this.props.producto.costo}
          </h6>
          <p className="card-text">
            Categoria: {this.props.producto.categoria}
          </p>
          <p className="card-text">Marca: {this.props.producto.marca}</p>
          <p className="card-text">Cantidad: {this.props.producto.cantidad}</p>
          <Link
            to={"/editar-producto/" + this.props.producto.id}
            className="btn btn-primary mr-2"
          >
            Editar
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => this.props.onClick(this.props.producto.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.productosReducers;
};

export default connect(
  mapStateToProps,
  productosActions
)(Producto);
