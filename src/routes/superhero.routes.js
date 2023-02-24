const express = require('express');
const superhero_model = require("../models/superhero.model");
const superhero_routes_http = express.Router();

/* Crear un nuevo superhero
    mongoose method: save()
    http://localhost:5000/ 
*/
superhero_routes_http.post("/", (req, res) => {
    const new_superhero = superhero_model(req.body);
    new_superhero
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

/* Listar todos los registros de la bd mongoose
    method: find() */

superhero_routes_http.get("/", (req, res) => {
    superhero_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});    
