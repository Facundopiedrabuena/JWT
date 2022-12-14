

import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  /* la función handleClick llama a la funciòn sigup dentro de actions en flux.js, enviando los parámetros necesarios y luego redirige el usuario al home */
  const handleClick = () => {
    actions.signup(nombre, apellidos, email, password);
    navigate("/");
  };

  return (
    <div className="p-3 border-0">
      <h1 className="text-center">Formulario de Registro</h1>
      <div className="d-grid gap-2">
        <label className="form-label">Nombre</label>
        <div className="d-grid gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Indique su nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="d-grid gap-2">
        <label className="form-label">Apellidos</label>
        <div className="d-grid gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Indique sus Apellidos"
            value={apellidos}
            onChange={(e) => {
              setApellidos(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="d-grid gap-2">
        <label className="form-label">Correo Electrónico</label>
        <div className="d-grid gap-2">
          <input
            type="email"
            className="form-control"
            placeholder="Escriba su correo electrónico"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="col-sm-2 col-form-label">Contraseña</label>
        <div className="d-grid gap-2">
          <input
            type="password"
            className="form-control"
            placeholder="Por favor, escriba su contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Registrarme
        </button>
      </div>
    </div>
  );
};