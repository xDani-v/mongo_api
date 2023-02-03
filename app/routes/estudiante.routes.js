var express = require('express');
var EstudianteController = require('../controllers/estudiante.controller');

var api = express.Router();

api.get('/pb',EstudianteController.pruebas);
api.post('/save',EstudianteController.saveEstudiante);
api.put('/edit',EstudianteController.actualizarEstudiante);
api.delete('/delete',EstudianteController.eliminarEstudiante);

module.exports = api;