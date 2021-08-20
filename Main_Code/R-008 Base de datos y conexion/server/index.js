const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sis_tutoria',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// ALUMNO
//insert alumno
app.post("/api/alumno/insert", (req, res) => {
  console.log("Insertando datos de estudiante");
  const codigoAlumno = req.body.codigoAlumno;
  const nombreAlumno = req.body.nombreAlumno;
  const apellidoAlumno = req.body.apellidoAlumno;
  const email = req.body.email;
  const numero = req.body.telefono;

  const sqlInsert = "INSERT INTO tabla_estudiantes (cod_alumno, nombre, apellido, email, numeroTelefono) VALUES (?,?,?,?,?)"; //no poner los datos a ingresar, solo poner (?,?...)
  db.query(sqlInsert, [codigoAlumno, nombreAlumno, apellidoAlumno, email, numero] , (err, result) => {
    console.log(result);
  });
});

//eliminar con validación
app.post("/api/alumno/delete", (req, res) => {
  console.log("Eliminando datos de estudiante");
  const codAlumno = req.body.codigoAlumno;

  const sqlDelete = "DELETE FROM tabla_estudiantes WHERE cod_alumno = ?"; //no poner los datos a ingresar, solo poner (?,?...)
  db.query(sqlDelete, [codAlumno] , (err, result) => {
    console.log(result);
  });
});

// DOCENTE



app.listen(3001, () =>{
  console.log("server run on port 3001");
});
