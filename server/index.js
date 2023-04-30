// server/index.js

const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use( express.static( path.resolve( __dirname, '../client/build')));

// ----------------------------------------------------------------------------------------------------
// Credenciales de MySql
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'bfe69e85bdfa02',
  password: '1ff3b80b',
  database: 'heroku_165ba2bac897bae'
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
  const response = await db_query("SELECT * FROM iniciales where region = 'Kanto';");
  res.json(response);
  res.end;
}

getJohto = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales where region = 'Johto';");
  res.json(response);
  res.end;
}

getHoenn = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales where region = 'Hoenn';");
  res.json(response);
  res.end;
}

getAll = async (req, res) => {
  const response = await db_query("SELECT imagen FROM iniciales;");
  res.json(response);
  res.end;
}

app.get("/api/kanto", getKanto);
app.get("/api/johto", getJohto);
app.get("/api/hoenn", getHoenn);
app.get("/api/all", getAll);

// ----------------------------------------------------------------------------------------------------

app.get("/api/home", (req, res) =>{
  res.json({message: "Hola, mi nombre es profesor Oak... Bienvenido al mundo de los pokemons. En esta API podras conseguir informacion de los pokemon iniciales de todas las regiones!"})
});

app.get('*', (req, res) => {
  res.sendFile( path.resolve( __dirname, '../client/build', 'index.html'));
  });  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
