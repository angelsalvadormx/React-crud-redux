import React, { Component, Fragment } from 'react';

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
          {
            this.state.productos.map((item, key) => (
              <Producto key={key} producto={item} />
            ))
          }
      </Fragment>
    );
  }
};

export default MostrarProductos;