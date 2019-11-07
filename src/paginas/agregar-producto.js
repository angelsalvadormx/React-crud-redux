import React, { Component, Fragment } from 'react';
import swal from 'sweetalert2';

// Componentes
import Formulario from '../components/formulario';
import api from '../components/api';

class agregarProducto extends Component {
  state = {
    loading: true,
    error: '',
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
    console.log(this.state.form);
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.create("productos", this.state.form);
      this.setState({ loading: false });
      swal.fire({
        title: 'Success!',
        text: 'Producto Agregado',
        icon: 'success'
      });
      this.props.history.push("/productos");
    } catch (error) {
      swal.fire({
        title: 'Error!',
        text: 'Error al agregar el producto',
        icon: 'error'
      });
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const style = {
      center: {
        margin: '30px auto'
      }
    }
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
    )
  }
};
export default agregarProducto;