var express = require('express');
var router = express.Router();
const APIPassengerController = require("../../controllers/passengerController");
const APIBookingController = require("../../controllers/bookingController");

router.get('/:passenger_id/flights/', APIPassengerController.getPassengerFlights);
router.get('/:passenger_id/flights/:flight_id', APIPassengerController.getPassengerFlight);

router.post('/:passenger_id/flights/:flight_id', logged, APIBookingController.bookFlight);

router.get('/:passenger_id', logged, APIPassengerController.getPassengerData);

router.get('/:passenger_id/bookings', logged, APIPassengerController.getPassengerBookings);
router.get('/:passenger_id/bookings/booking_id', logged, APIPassengerController.getPassengerBooking);

module.exports = router;