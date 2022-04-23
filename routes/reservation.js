const { Router } = require('express');
const { check } = require('express-validator');

const { reservationGet,
        reservationDelete,
        reservationPut,
        reservationPost,
        reservacionGet } = require('../controllers/reservation');
const { validations } = require("../middlewares/validations");
const {user} = require("../helpers/dbValidators");
const {jwtValidations} = require("../middlewares/jwt-validations");

const router = Router();

router.post("/paciente",[
  check('paciente', 'paciente is required').not().isEmpty(),
  check('tratamiento', 'tratamiento is required').not().isEmpty(),
  //check('numeromovil', 'numeromovil is required').not().isEmpty(),
  check('montoapagar', 'montoapagar is required').not().isEmpty(),
  check('tipodepago', 'tipodepago is required').not().isEmpty(),
  check('doctora', 'doctora is required').not().isEmpty(),
  //check('porciento', 'porciento is required').not().isEmpty(),
  validations
], reservationPost);

router.get('/information/:id', [
    jwtValidations,
    check('id', 'is not a valid ID').isMongoId(),
    validations
], reservationGet);

router.get('/todos', [
    jwtValidations,
    validations
], reservacionGet);


router.put('/update/:id',[
    jwtValidations,
    check('id', 'is not a valid ID').isMongoId(),
    //check('id').custom(user),
    validations
], reservationPut);

router.delete('/delete/:id', [
    jwtValidations,
    check('id', 'is not a valid ID').isMongoId(),
    //check('id').custom(user),
    validations
], reservationDelete);

module.exports = router;