'use strict';

var express = require('express');
var estudiante_routes = require('../routes/estudiante.routes')

var app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api',estudiante_routes)

module.exports = app;