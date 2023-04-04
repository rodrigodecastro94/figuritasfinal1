//import "./Listado.css";
import React, { useState, useEffect } from "react";

//import { Link } from "react-router-dom";
function Categoria(props) {
  
  return (
    <div>
      
      <fieldset>
        <legend>
          {props.nombre}
        </legend>
        <div className = "cats">
          {props.figuritas.map(function(item,index) {
            return item;
          })}
        </div>
      </fieldset>

           
    </div>
  );
}
export default Categoria;
