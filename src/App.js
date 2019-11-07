import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Componentes
import Encabezado from './components/encabezado';
import PieDePagina from './components/pieDePagina';

//Paginas
import mostarProductos from './paginas/mostrar-productos'
import agrgarProducto from './paginas/agregar-producto';
import EditarProducto from './paginas/editar-producto';
import inicio from './paginas/inicio';
import noEncontrado from './paginas/404';


function App() {
  return (
    <Router>
      <Encabezado/>
      <Switch>
          <Route path="/" exact component={inicio} />
          <Route path="/productos" component={mostarProductos} />
          <Route path="/agregar-producto" component={agrgarProducto} />
          <Route path="/editar-producto/:id" component={EditarProducto} />
          <Route component={noEncontrado} />
        </Switch>
        <PieDePagina/>
    </Router>    
  );
}

export default App;
