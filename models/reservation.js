const { Schema, model} = require('mongoose');
const ReservationSchema = Schema({
    paciente: {
        type: String,
        required: [true, 'el nombre del paciente es necesario'],
    },
    tratamiento: {
        type: String,
        required: [true, 'se necesita agregar el tratamiento'],
    },
    numeromovil: {
        type: String,
        required: [true],
    },
    montoapagar: {
        type: Number,
        //required: [true, 'el total del tratamiento es necesario'],
    },
    tipodepago: {
        type: String,
        //required: [true, 'la forma de pago en necesaria'],
    },
    doctora: { type: Schema.Types.ObjectId, ref: "Doctora" },
    porciento: {
        type: Number,
        //required: [true],
    },
});

module.exports = model('Reservation', ReservationSchema);