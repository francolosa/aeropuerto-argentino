var express = require('express');
var router = express.Router();
const APIPassengerController = require("../../controllers/passengerController");

router.get('/:passenger_id/flights/', APIPassengerController.getPassengerFlights);
router.get('/:passenger_id/flights/:flight_id', APIPassengerController.getPassengerFlight);

router.get('/:passenger_id', logged, APIPassengerController.getPassengerData);

router.get('/:passenger_id/bookings', logged, APIPassengerController.getPassengerBookings);
router.get('/:passenger_id/bookings/booking_id', logged, APIPassengerController.getPassengerBooking);

module.exports = router;