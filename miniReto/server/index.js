// server/index.js

const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/home", (req, res) =>{
  res.json({message: "Hola, mi nombre es profesor Oak... Bienvenido al mundo de los pokemons. En esta API podras conseguir informacion de los pokemon iniciales de todas las regiones!"})
});

app.use( express.static( path.resolve( __dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile( path.resolve( __dirname, '../client/build', 'index.html'));
  });  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
