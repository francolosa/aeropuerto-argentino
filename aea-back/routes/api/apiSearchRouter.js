var express = require('express');
var router = express.Router();
const APISearchController = require("../../controllers/searchController");

router.get('/flights/:flight_id?', APISearchController.getFlights);

router.get('/airlines/:airline_id?', APISearchController.getAirLines);

router.get('/destination/flights/:destination', APISearchController.searchByDestination);

router.get('/origin/flights/:origin', APISearchController.searchByOrigin);
router.get('/destination_origin/flights/:destination/:origin', APISearchController.searchByDestinationAndOrigin);


module.exports = router;