import React, { Component, Fragment } from "react";
import swl from "sweetalert2";

// Componentes
import Formulario from "../components/formulario";
import api from "../components/api";

import { connect } from "react-redux";
import * as productosActions from "../actions/productosActions";


class EditarProducto extends Component {
  state = {
    id: 0,
    form: {
      nombre: "",
      costo: 0,
      categoria: "",
      marca: "",
      cantidad: 0
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  constructor(props) {
    super(props);
    this.obtenerProducto(props.match.params.id);
    this.state.id = props.match.params.id;
  }

  obtenerProducto(id) {
    let found = this.props.productos.find((item) => {
      return item.id == id;
    });
    if (found != undefined) {
      this.state.form = found;
    }

    /*try {
      const res = await api.getById("productos", id);
      this.setState({ form: res });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 200);
    } catch (error) {
      this.setState({ loading: false, error: error });
    }*/
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.editarProducto(this.state.form,this.state.id);
    /*    try {
          await api.update("productos", this.state.id, this.state.form);
          this.setState({ loading: false });
          swl.fire({
            title: "Success!",
            icon: "success",
            text: "Producto editado con exito!"
          });
          this.props.history.push("/productos");
        } catch (error) {
          swl.fire({
            title: "Error!",
            icon: "error",
            text: "Error al editar el producto"
          });
          this.setState({ loading: false, error: error });
        }
        */
  };

  render() {
    const style = {
      center: {
        margin: "30px auto"
      }
    };

    return (
      <Fragment>
        <section className="w-50" style={style.center}>
          <h2 className="mb-4">Editar producto</h2>
          <Formulario
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            formValues={this.state.form}
            message="Editar"
          />
        </section>
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
)(EditarProducto);
