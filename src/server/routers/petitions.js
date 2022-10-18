var express = require('express');
const {
  createPetitionHandler,
  retrievePetitionHandler,
  editPetitionHandler,
  deletePetitionHandler
} = require('../controllers/api/petitions.js');




/**
  * @description
  * función con que se configura una instancia de express destinada a distribuir
  * las llamadas (relacionadas con "petitions") a que obliga la app en cada caso,
  * según la ruta y el modo en que tienen lugar.
  */
var config = {};
var router = express.Router();

router.post('/', createPetitionHandler);
router.get('/:petition', retrievePetitionHandler);
router.put('/:petition', editPetitionHandler);
router.delete('/:petition', deletePetitionHandler);




exports.router = router;
