// server/index.js

const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const fs = require("fs");

app.use(bodyParser.json());

// ----------------------------------------------------------------------------------------------------

// Credenciales de MySql
const mysql = require('mysql');
const { error } = require("console");
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

app.post('/api/pokemon', (req, res) => {
  const { name, region, pokedexnumber, type, weakness, imageurl } = req.body;
  const sql = "INSERT INTO iniciales (nombre, region, numeroPokedex, tipo, debilidad, imagen) VALUES ('" + name + "', '" + region + "','" + pokedexnumber+ "','" + type + "','" + weakness + "','" + imageurl + "')";
  connection.query(sql,(error, resultados, fields) =>{
    if(error)throw error;
    console.log('Created');
  })
  const newPokemon = { name, region, pokedexnumber, type, weakness, imageurl }
  res.json(newPokemon)
});

app.delete('/api/deletepokemon', (req, res) =>{
  const {name, region, pokedexnumber, type, weakness, imageurl} = req.body;
  const sql = "DELETE FROM iniciales WHERE nombre = '" + name + "'"
  connection.query(sql,(error, resultados, fields) =>{
    if(error)throw error;
    console.log('Deleted');
    const newPokemon = { name, region, pokedexnumber, type, weakness, imageurl }
    res.json(newPokemon)
  })
})

app.put('/api/updatepokemon', (req, res) =>{
  const {newname, newregion, newpokedexnumber, newtype, neweakness, newimageUrl } = req.body;
  const sql = "UPDATE iniciales SET nombre = '"+ newname +"', region = '"+ newregion +"', tipo =  '"+ newtype +"', debilidad = '"+ neweakness +"', imagen = '"+ newimageUrl +"'  WHERE numeroPokedex = '"+ newpokedexnumber +"'"
  connection.query(sql,(error, resultados, fields) =>{
    if(error)throw error;
    console.log('Updated');
    const newPokemon = { newname, newregion, newpokedexnumber, newtype, neweakness, newimageUrl }
    res.json(newPokemon)
    //res.send(resultados)
  })
})


app.get("/api/message", (req, res) =>{
  res.json({message: "Hola!, soy el profesor Oak. Te doy la bienvenida al mundo Pokemon!"})
});

app.get("/api/message2", (req, res) =>{
  res.json({message: "En esta API podras conocer todo tipo de informacion de los iniciales de cada region, desde su tipo hasta sus estadisticas. Solo elige la region que quieras visitar y continua!"})
});

app.get("/api/message3", (req, res) =>{
  res.json({message: "Te aseguramos que después de visitar todas nuestras secciones tendrás completamente en claro qué Pokemon eligirás para tu siguiente aventura!"})
});

app.get("/api/message4", (req, res) =>{
  res.json({message: "Por ultimo, tambien contamos con una herramienta para crear tu propio Pokemon customizado, no olvides visitarla! Disfruta tu camino Pokemon!"})
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
