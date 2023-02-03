const { default: mongoose } = require('mongoose');
const estudiante = require('../models/estudiante');
var Estudiante = require('../models/estudiante');

function saveEstudiante(req, res) {
    var estudiante = new Estudiante();

    var params = req.body;

    if (params.nombre) {
        estudiante.nombre = params.nombre;
        estudiante.dni = params.dni;
        estudiante.direccion = params.direccion;

        estudiante.save((err, estudianteStored) => {
            if (err) {
                res.status(200).send({
                    mensaje: 'error del servidor'
                })
            } else {
                if (estudianteStored) {
                    res.status(200).send({
                        estudiante: estudianteStored,
                        mensaje: 'estudiante registrado'
                    });
                } else {
                    res.status(200).send({
                        mensaje: 'no se puede guardar al estudiante'
                    })
                }
            }
        })
    } else {
        res.status(200).send({
            mensaje: 'nombre de estudiante obligatorio'
        })
    }
}

function pruebas(req, res) {
    res.status(200).send({
        mensaje: 'ruta de prueba de mi Api'
    });
}

const actualizarEstudiante = (req, res) =>{
    var params = req.body;
    const id = params.id;

    if (params.nombre) {
        respu = estudiante.updateOne(
            { 
                _id: mongoose.Types.ObjectId(id)
            }, 
            {
            nombre: params.nombre,
            dni: params.dni,
            direccion: params.direccion
        }, (err,resul) => {
            if (err) {
                res.status(200).send({
                    mensaje: 'error del servidor'
                })
            }else{
                res.status(200).send({
                    res: resul,
                    mensaje: 'estudiante registrado'
                });
            }
        });

        //console.log(respu);
    } else {
        res.status(200).send({
            mensaje: 'nombre de estudiante obligatorio'
        })
    }

};


const eliminarEstudiante =  (req, res) =>{
    const id = req.body.id;
    console.log(id);
    const resu =  estudiante.deleteOne(
        {
            _id: mongoose.Types.ObjectId(id)
        },(err)=>{
            if(!err)res.status(200).send({
                mensaje: "Exito"
            })
        }
    )
    console.log("res ");
};


module.exports = {
    pruebas,
    saveEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};