var mongose = require('mongoose');
var schema = mongose.Schema;
var EstudianteSchema = schema({
    dni:String,
    nombre: String,
    direccion: String
});

module.exports = mongose.model('estudiante',EstudianteSchema);