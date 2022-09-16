var express = require('express');
const {
  apiCreateLocationHandler,
  apiRetrieveLocationHandler,
  apiEditLocationHandler,
  apiDeleteLocationHandler
} = require('../controllers/apis/locations.js');



var config = {};
var router = express.Router();

router.post('/', apiCreateLocationHandler);
router.get('/:location', apiRetrieveLocationHandler);
router.put('/:location', apiEditLocationHandler);
router.delete('/:location', apiDeleteLocationHandler);




exports.router = router;
