import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Componentes
import encabezado from './components/encabezado';
import pieDePagina from './components/pieDePagina';

//Paginas
import mostarProductos from './paginas/mostrar-productos'
import agrgarProducto from './paginas/agregar-producto';
import editarProducto from './paginas/editar-producto';
import inicio from './paginas/inicio';
import noEncontrado from './paginas/404';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={inicio} />
          <Route path="/mostrar-productos" component={mostarProductos} />
          <Route path="/agregar-producto" component={agrgarProducto} />
          <Route path="/editar-producto" component={editarProducto} />
          <Route component={noEncontrado} />
        </Switch>
    </Router>    
  );
}

export default App;
