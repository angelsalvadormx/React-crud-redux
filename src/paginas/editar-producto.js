import React, { Component, Fragment } from "react";
import swal from "sweetalert2";

import Loader from "./loader";

// Componentes
import Formulario from "../components/formulario";

import { connect } from "react-redux";
import * as productosActions from "../actions/productosActions";

import { simulateNetworkLatency } from "../components/Network";

class EditarProducto extends Component {
  state = {
    id: 0,
    loading: true,
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

  async componentDidMount() {
    await simulateNetworkLatency();
    this.setState({ loading: false });
  }

  componentDidUpdate() {
    if (this.props.actualizado === true) {
      swal.fire({
        title: "Success!",
        text: "Producto Actualizado",
        icon: "success"
      });
      this.props.history.push("/productos");
    } else if (this.props.actualizado === false) {
      swal.fire({
        title: "Error",
        text: "El producto no fue actualizado",
        icon: "error"
      });
    }
  }
  obtenerProducto(id) {
    let found = this.props.productos.find(item => {
      return item.id == id;
    });
    if (found != undefined) {
      this.state.form = found;
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.editarProducto(this.state.form, this.state.id);
    this.setState({ loading: false });
  };

  render() {
    const style = {
      center: {
        margin: "30px auto"
      }
    };
    if (this.state.loading === true) {
      return <Loader />;
    }
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
