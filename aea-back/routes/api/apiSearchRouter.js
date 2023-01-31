var express = require('express');
var router = express.Router();
const APISearchController = require("../../controllers/searchController");

router.get('/flights/', APIPassengerController.getFlights);
router.get('/flights/:flight_id', APIPassengerController.getFlight);

router.post('/airlines/', APIPassengerController.getAirLines);
router.post('/airlines/:airline_id', APIPassengerController.getAirLine);

module.exports = router;