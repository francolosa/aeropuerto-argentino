var express = require('express');
var router = express.Router();
const APISearchController = require("../../controllers/searchController");

router.get('/flights/:flight_id?', APISearchController.getFlights);

router.get('/airlines/:airline_id?', APISearchController.getAirLines);

module.exports = router;