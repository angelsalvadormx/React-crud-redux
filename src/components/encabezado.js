import React from 'react';
import {Link} from "react-router-dom";

const Encabezado = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Crud Productos [MAV]</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos">Productos</Link>
          </li>
        </ul>
        </div>
      </nav>
      );
    };
    
export default Encabezado;