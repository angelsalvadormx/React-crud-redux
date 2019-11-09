import React from "react";

export default props => {
  const data = props.formValues;
  //console.log(props);

  return (
    <form className="" onSubmit={props.onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control border shadow"
          placeholder="Nombre"
          name="nombre"
          value={data.nombre}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control border shadow"
          placeholder="Costo"
          name="costo"
          value={data.costo}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control border shadow"
          placeholder="Categoria"
          name="categoria"
          value={data.categoria}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control border shadow"
          placeholder="Marca"
          name="marca"
          value={data.marca}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control border shadow"
          placeholder="Cantidad"
          name="cantidad"
          value={data.cantidad}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <button className="rounded-10 btn btn-primary btn-block">
          {props.message}
        </button>
      </div>
    </form>
  );
};
