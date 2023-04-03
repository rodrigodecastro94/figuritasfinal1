const express = require("express");
const path = require("path");
var mysql = require("mysql");

var cors = require("cors");
//const { ok } = require("assert");
const app = express();
app.use("/img", express.static(path.join(__dirname, "img")));
app.use(express.json());
app.use(cors());
const port = 3001;


app.get("/figuritas", (request, response) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "12345",
    database: "proyecto_figuritas",
    multipleStatements: true,
  });
  connection.connect();

  connection.query(
    "SELECT * from figurita; SELECT * from categoria",
    (err, rows, fields) => {
      if (err) throw err;

      response.status(200).json({ categorias: rows[1], figuritas: rows[0] });
    }
  );
  connection.end();
});
app.put("/figurita/sumar/:id", (request, response) => {
  let id = request.params.id;
  let cantidad = request.body.cantidad +1 ;
  const connection = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "12345",
    database: "proyecto_figuritas",
    multipleStatements: true,
  });
  connection.connect();
  connection.query(
    "UPDATE figurita SET cantidad ="+cantidad+" WHERE id = "+id+ ";SELECT * from figurita; SELECT * from categoria",
    (err, rows, fields) => {
      if (err) throw err;

      response.status(200).json({ categorias: rows[2], figuritas: rows[1] });
    }
  );
 
  connection.end();
});
app.put("/figurita/restar/:id", (request, response) => {
  let id = request.params.id;
  let cantidad = request.body.cantidad -1 ;
  const connection = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "12345",
    database: "proyecto_figuritas",
    multipleStatements: true,
  });
  connection.connect();
  connection.query(
    "UPDATE figurita SET cantidad ="+cantidad+" WHERE id = "+id+ ";SELECT * from figurita; SELECT * from categoria",
    (err, rows, fields) => {
      if (err) throw err;

      response.status(200).json({ categorias: rows[2], figuritas: rows[1] });
    }
  );
 
  connection.end();
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
