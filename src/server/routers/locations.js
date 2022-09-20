var express = require('express');
const {
  createLocationHandler,
  retrieveLocationHandler,
  editLocationHandler,
  deleteLocationHandler
} = require('../controllers/api/locations.js');




var config = {};
var router = express.Router();

router.post('/', createLocationHandler);
router.get('/:location', retrieveLocationHandler);
router.put('/:location', editLocationHandler);
router.delete('/:location', deleteLocationHandler);




exports.router = router;
