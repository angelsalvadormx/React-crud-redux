import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import swal from 'sweetalert2';


// Componentes
import Producto from '../components/producto';
import Api from '../components/api';
import Loader from './loader';

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
      this.setState({ productos: respuesta });
      setTimeout(()=>{
        this.setState({ loading: false });
      },500)
      
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  eliminarProducto(id_producto) {
    swal.fire({
      title: 'Estas seguro?',
      text: "El producto se eliminara",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then(async (result) => {
      if (result.value) {
        try {
          await Api.remove('productos', id_producto);
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
          })
        }
      }
    })
  }

 

  render() {
    if(this.state.loading == true){
      return <Loader/>
    }
    return (
      <Fragment>
        <header className="d-flex  p-3 justify-content-end ">
          <Link className="btn btn-primary" to="/agregar-producto">Agregar Producto</Link>
        </header>
        <main className="d-flex flex-wrap">
          {
            this.state.productos.map((item, key) => (
              <Producto key={key} producto={item} onClick={this.eliminarProducto} />
            ))
          }
        </main>
      </Fragment>
    );
  }
};

export default MostrarProductos;