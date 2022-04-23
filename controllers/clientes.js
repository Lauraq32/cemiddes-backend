const { response, request } = require("express");
const Clientes = require("../models/clientes");

const clientesPost = async (req, res) => {
  const clientes = new Clientes({
    paciente: req.body.paciente,
    tratamiento: req.body.tratamiento,
    doctora: req.body.doctora,
    fecha: req.body.fecha,
    numeromovil: req.body.numeromovil,
    visitasdelpaciente: req.body.visitasdelpaciente,
  });
  clientes
    .save()
    .then(async (result) => {
        const clientesObj = result.toObject();
        return res.status(201).json({
         ...clientesObj,
      });
    })
    .catch((err) => {
      console.log(`an error occurred ${err}`);
      return res.status(404).json({
        error: err,
      });
    });
};
const clientesDelete = async (req, res = response) => {
  const { id } = req.params;

  await Clientes.findByIdAndDelete(id)
  if (!Clientes) {
    return res.status(404).json({
      message: "Clientes not found",
    });
  }
  return res.status(200).json({
    message: "cliente deleted",
  });
};

const clientesGet = async (req = request, res = response) => {
  const paciente = req.body.paciente;

  Clientes.find({ paciente: paciente }).then((doc) => {
    console.log("from database", doc);
    if (doc) {
      return res.status(200).json({
        clientes: doc,
      });
    } else {
      return res.status(404).json({ message: "cliente not found" });
    }
  });
};

const clientsGet = async (req = request, res = response) => {
  const clientes = await Clientes.find();

  if (!Clientes) {
    return res.status(404).json({
      message: "Clientes not found",
    });
  }
    return res.status(200).json({
      clientes
    });

};

const clientesPut = async (req, res = response) => {
  const id = req.params.id;

  const updateOps = {
    paciente: req.body.paciente,
    tratamiento: req.body.tratamiento,
    doctora: req.body.doctora,
    fecha: req.body.fecha,
    numeromovil: req.body.numeromovil,
    visitasdelpaciente: req.body.visitasdelpaciente,
  };

  Clientes.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then(async () => {
      return res.status(200).json({
        message: "clientes updated",
      });
    })

    .catch((err) => {
      return res.status(400).json({
        error: err,
      });
    });
};

module.exports = {
  clientesPost,
  clientesGet,
  clientesPut,
  clientesDelete,
  clientsGet
};