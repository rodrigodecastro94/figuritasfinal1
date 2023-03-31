import "./Lista.css";
import React, { useState, useEffect } from "react";
import Categoria from "./Categoria";
import Figurita from "./Figurita";
//import { Link } from "react-router-dom";
function Lista(props) {
  const [categorias, setCategorias] = useState([]);
  const [figuritas, setFiguritas] = useState([]);
  useEffect(() => {
    if(categorias.length===0){
      console.log("buscar");
      fetch("http://localhost:3001/figuritas", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
  
        .then(function (myJson) {
          setCategorias(myJson.categorias);
          setFiguritas(myJson.figuritas);
        });
    }
  
  }, []);

  function sumar(id,cantidad){
    fetch("http://localhost:3001/figurita/sumar/"+ id, {

        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify({cantidad: cantidad}),
      })
        .then(function (response) {
          return response.json();
        })
  
        .then(function (myJson) {
          setCategorias(myJson.categorias);
          setFiguritas(myJson.figuritas);
        });
  }
  function restar(id,cantidad){
    fetch("http://localhost:3001/figurita/restar/"+ id, {

        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify({cantidad: cantidad}),
      })
        .then(function (response) {
          return response.json();
        })
  
        .then(function (myJson) {
          setCategorias(myJson.categorias);
          setFiguritas(myJson.figuritas);
        });
  }
  function displayList() {
    let arrCat = [];
    if (categorias.length > 0) {
      for (let i = 0; i < categorias.length; i++) {
        let arrFig = [];
        if (figuritas.length > 0) {
          for (let y = 0; y < figuritas.length; y++) {
            if (categorias[i].id_categoria === figuritas[y].id_categoria) {
              arrFig.push(<Figurita  key = {y} datos = {figuritas[y]} suma = {sumar} resta = {restar}/>);
            }
          }
        }

        if (arrFig.length > 0) {
          arrCat.push(
            <Categoria
              figuritas={arrFig}
              nombre={categorias[i].descripcion}
              key={i}
            />
          );
        }
      }
      if (arrCat.length > 0) {
        return arrCat;
      }
    }
  }
  return <div>{displayList()}</div>;
}
export default Lista;
