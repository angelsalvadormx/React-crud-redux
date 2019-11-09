import React, { Component, Fragment } from "react";
import swal from "sweetalert2";
import Loader from "./loader";

// Componentes
import Formulario from "../components/formulario";

import { connect } from "react-redux";
import * as productosActions from "../actions/productosActions";

import { simulateNetworkLatency } from "../components/Network";

class agregarProducto extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    loading: true,
    form: {
      nombre: "",
      costo: "",
      categoria: "",
      marca: "",
      cantidad: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    //console.log(this.state.form);
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.agregarProducto(this.state.form);
    this.setState({ loading: false });
  };

  async componentDidMount() {
    await simulateNetworkLatency();
    this.setState({ loading: false });
  }

  componentDidUpdate() {
    if (this.props.agregado === true) {
      swal.fire({
        title: "Success!",
        text: "Producto Agregado",
        icon: "success"
      });
      this.props.history.push("/productos");
    } else if (this.props.agregado === false) {
      swal.fire({
        title: "Error",
        text: "El producto no fue agregado",
        icon: "error"
      });
    }
  }

  render() {
    const style = {
      center: {
        margin: "30px auto"
      }
    };
    if (this.state.loading === true) {
      return <Loader />;
    }
    console.log(this.props);
    return (
      <Fragment>
        <section className="w-50" style={style.center}>
          <h2 className="mb-4">Agregar nuevo producto</h2>
          <Formulario
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            formValues={this.state.form}
            message="Agregar"
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
)(agregarProducto);
