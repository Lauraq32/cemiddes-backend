const { Router } = require('express');
const { check } = require('express-validator');

const { clientesGet,
        clientesDelete,
        clientesPut,
        clientesPost,
        clientsGet } = require('../controllers/clientes');
const { validations } = require("../middlewares/validations");
const {user} = require("../helpers/dbValidators");
const {jwtValidations} = require("../middlewares/jwt-validations");

const router = Router();

router.post("/nuevo",[
  check('paciente', 'paciente is required').not().isEmpty(),
  check('tratamiento', 'tratamiento is required').not().isEmpty(),
  check('doctora', 'doctora is required').not().isEmpty(),
  check('fecha', 'fecha is required').not().isEmpty(),
  check('numeromovil', 'numeromovil is required').not().isEmpty(),
  check('visitasdelpaciente', 'visitasdelpaciente is required').not().isEmpty(),
  validations
], clientesPost);

router.get('/fichero', [
    jwtValidations,
    //check('id', 'is not a valid ID').isMongoId(),
    validations
], clientesGet);

router.get('/todos', [
    jwtValidations,
    //check('id', 'is not a valid ID').isMongoId(),
    validations
], clientsGet);

router.put('/update/:id',[
    jwtValidations,
    check('id', 'is not a valid ID').isMongoId(),
    //check('id').custom(user),
    validations
], clientesPut);

router.delete('/delete/:id', [
    jwtValidations,
    check('id', 'is not a valid ID').isMongoId(),
    //check('id').custom(user),
    validations
], clientesDelete);

module.exports = router;