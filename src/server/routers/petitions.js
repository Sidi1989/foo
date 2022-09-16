var express = require('express');
const {
  apiCreatePetitionHandler,
  apiRetrievePetitionHandler,
  apiEditPetitionHandler,
  apiDeletePetitionHandler
} = require('../controllers/api/petitions.js');




var config = {};
var router = express.Router();

router.post('/', apiCreatePetitionHandler);
router.get('/:petition', apiRetrievePetitionHandler);
router.put('/:petition', apiEditPetitionHandler);
router.delete('/:petition', apiDeletePetitionHandler);




exports.router = router;
