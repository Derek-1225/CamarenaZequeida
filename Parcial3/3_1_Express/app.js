const mysql = require('mysql2')
const express = require('express')
const app = express();
const cors=require('cors')
const port = 3000;

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user:'root', 
  database: 'panaderia'
});

app.get('/alumnos',cors(), (req, res) => {
    connection.query(
      'SELECT * FROM `proveedores`',
      function (err,results,fields){
        console.log(results);
        console.log(fields);
        res.send(results)
      })
});

app.get('/docentes/:control', cors(), (req, res) => {
  console.log(req.params);
  res.send('Hello World!');
});

app.post('/directivos', cors(), (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
