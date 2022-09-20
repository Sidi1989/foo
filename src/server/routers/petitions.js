var express = require('express');
const {
  createPetitionHandler,
  retrievePetitionHandler,
  editPetitionHandler,
  deletePetitionHandler
} = require('../controllers/api/petitions.js');




var config = {};
var router = express.Router();

router.post('/', createPetitionHandler);
router.get('/:petition', retrievePetitionHandler);
router.put('/:petition', editPetitionHandler);
router.delete('/:petition', deletePetitionHandler);




exports.router = router;
