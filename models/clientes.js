const { Schema, model} = require('mongoose');
const ClientesSchema = Schema({
    paciente: {
        type: String,
        required: [true, 'el nombre del paciente es necesario'],
    },
    tratamiento: {
        type: String,
        required: [true, 'se necesita agregar el tratamiento'],
    },
    doctora: {
        type: String,
        required: [true, 'el nombre de la doctora es necesario'],
    },
    fecha: {
        type: Date,
        required: [true, 'la fecha es necesaria'],
    },
    numeromovil: {
        type: String,
        required: [true],
    },
    visitasdelpaciente: {
        type: String,
        required: [true],
    },
});

module.exports = model('Clientes', ClientesSchema);