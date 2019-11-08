import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

// Componentes
import Producto from "../components/producto";
import Api from "../components/api";
import Loader from "./loader";

import { connect } from "react-redux";
import * as productosActions from "../actions/productosActions";

class MostrarProductos extends Component {
  componentDidMount() {
    this.props.obtenerProductos();
  }

  eliminarProducto(id_producto) {
    swal
      .fire({
        title: "Estas seguro?",
        text: "El producto se eliminara",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminarlo!",
        cancelButtonText: "Cancelar"
      })
      .then(async result => {
        if (result.value) {
          try {
            await Api.remove("productos", id_producto);
            swal.fire({
              title: "ELiminado",
              text: "El producto fue eliminado",
              icon: "success"
            });
            //this.obtenerProductos();
          } catch (err) {
            console.log(err);

            swal.fire({
              title: "Error",
              text: "El producto no fue eliminado",
              icon: "error"
            });
          }
        }
      });
  }

  render() {
    console.log(this.props);
    //console.log(this.state);
    if (this.props.loading === true && this.props.productos === undefined) {
      return <Loader />;
    }
    return (
      <Fragment>
        <header className="d-flex  p-3 justify-content-end ">
          <Link className="btn btn-primary" to="/agregar-producto">
            Agregar Producto
          </Link>
        </header>
        <main className="d-flex flex-wrap">
          {this.props.productos.map((item, key) => (
            <Producto
              key={key}
              producto={item}
              onClick={this.eliminarProducto}
            />
          ))}
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state.productosReducers;
};

export default connect(
  mapStateToProps,
  productosActions
)(MostrarProductos);
