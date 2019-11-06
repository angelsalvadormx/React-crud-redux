import React from 'react';

const Producto = ({ producto }) => {
  console.log(producto);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${producto.costo}</h6>
        <p className="card-text">Categoria {producto.categoria}</p>
        <p className="card-text">Marca {producto.marca}</p>
        <p className="card-text">Cantidad {producto.cantidad}</p>
      </div>
    </div>
  );
};

export default Producto;