import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

// Componentes
import Producto from "../components/producto";
import Loader from "./loader";

import { connect } from "react-redux";
import * as productosActions from "../actions/productosActions";

class MostrarProductos extends Component {
  constructor(props) {
    super(props);
    this.eliminarProducto = this.eliminarProducto.bind(this);
  }
  componentDidMount() {
    this.props.obtenerProductos();
    this.intervalId = setInterval(this.props.obtenerProductos, 5000);
  }
  componentDidUpdate() {
    this.comprobar();
  }
  componentWillUnmount() {
    clearTimeout(this.intervalId);
  }

  comprobar() {
    if (this.props.eliminado === true) {
      swal.fire({
        title: "ELiminado",
        text: "El producto fue eliminado",
        icon: "success"
      });
    } else if (this.props.eliminado === false) {
      swal.fire({
        title: "Error",
        text: "El producto no fue eliminado",
        icon: "error"
      });
    }
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
      .then(result => {
        if (result.value) {
          this.props.eliminarProducto(id_producto);
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
