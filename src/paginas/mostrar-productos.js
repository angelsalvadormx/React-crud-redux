import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";

// Componentes
import Producto from '../components/producto';
import Api from '../components/api';

class MostrarProductos extends Component {
  state = {
    loading: true,
    error: '',
    productos: []
  }
  constructor() {
    super();
    this.obtenerProductos()
  }

  async obtenerProductos() {
    try {
      let respuesta = await Api.list('productos');
      console.log(respuesta);

      this.setState({ productos: respuesta });
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }
  render() {
    return (
      <Fragment>
        <header className="d-flex  p-3 justify-content-end ">
          <Link className="btn btn-primary" to="/agregar-producto">Agregar Producto</Link>
        </header>
        <main className="d-flex">
          {
            this.state.productos.map((item, key) => (
              <Producto key={key} producto={item} />
            ))
          }
        </main>
      </Fragment>
    );
  }
};

export default MostrarProductos;