// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3003;
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/api", (request, response) =>{
    response.json({message: "Probando, probando..."});
});

app.listen(PORT, () => {
    console.log(`Escuchando peticiones en puerto: ${PORT}`);
});