// server/index.js

const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const fs = require("fs");

app.use(bodyParser.json());

app.get("/api/message", (req, res) =>{
  res.json({message: "Hola!, soy el profesor Oak. Te doy la bienvenida al mundo Pokemon!"})
});

app.get("/api/message2", (req, res) =>{
  res.json({message: "En esta API podras conocer todo tipo de informacion de los iniciales de cada region, desde su tipo hasta sus estadisticas. Solo elige la region que quieras visitar y continua!"})
});

app.get("/api/message3", (req, res) =>{
  res.json({message: "Te aseguramos que después de visitar todas nuestras secciones tendrás completamente en claro qué Pokemon eligirás para tu siguiente aventura!"})
})

app.get("/api/message4", (req, res) =>{
  res.json({message: "Por ultimo, tambien contamos con una herramienta para crear tu propio Pokemon customizado, no olvides visitarla! Disfruta tu camino Pokemon!"})
})

app.post('/api/kantoPkmn', (req, res) => {
  const formData = req.body;
  fs.writeFile('./Kanto.json', JSON.stringify(formData), (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      console.log('Json created');
      res.json(formData);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
