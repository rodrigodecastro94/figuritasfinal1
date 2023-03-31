//import "./Listado.css";
import React, { useState, useEffect } from "react";

//import { Link } from "react-router-dom";
function Figurita(props) {
  return (
    <div className="items">
      <div>
        <img
          src={"http://localhost:3001" + props.datos.imagen}
          alt="figurita"
        />
      </div>
      <div className="titulo">{props.datos.nombre}</div>
      <div
        className="subtitulo"
        style={{ color: props.datos.cantidad > 0 ? "green" : "red" }}
      >
        {props.datos.cantidad > 0
          ? "Tengo " + props.datos.cantidad
          : "No tengo "}
      </div>
      <div className="boton-contenedor">
        
        {props.datos.cantidad > 0 ? (
          <button
            onClick={function () {
              props.resta(props.datos.id, props.datos.cantidad);
            }}
          >
            -
          </button>
        ) : (
          ""
        )}
        <button
          onClick={function () {
            props.suma(props.datos.id, props.datos.cantidad);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Figurita;
