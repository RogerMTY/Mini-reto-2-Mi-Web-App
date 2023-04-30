// server/index.js

const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use( express.static( path.resolve( __dirname, '../client/build')));

// Credenciales de MySql
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'miniReto',
  password: 'hola123',
  database: 'pokemon'
})

connection.connect((error, s)=>{
  console.log(error);
});

function db_query(query){
  try{
      return new Promise((resolve, reject) => {
        connection.query(query, function (err, result) {
              if (err) throw err;
              resolve(Object.values(result));
          });
        });
  }catch(except){}
}

getKanto = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales LIMIT 4;");
  res.json(response);
  res.end;
}

app.get("/api/kanto", getKanto);


app.get("/api/home", (req, res) =>{
  res.json({message: "Hola, mi nombre es profesor Oak... Bienvenido al mundo de los pokemons. En esta API podras conseguir informacion de los pokemon iniciales de todas las regiones!"})
});

app.get('*', (req, res) => {
  res.sendFile( path.resolve( __dirname, '../client/build', 'index.html'));
  });  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
