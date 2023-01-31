var express = require('express');
var router = express.Router();
const APISearchController = require("../../controllers/searchController");

//ok
router.get('/flights/', APISearchController.getFlights);
router.get('/flights/:flight_id', APISearchController.getFlight);

//ok
router.get('/airlines/', APISearchController.getAirLines);
router.get('/airlines/:airline_id', APISearchController.getAirLine);

module.exports = router;