var express = require('express');
var router = express.Router();
const APIPassengerController = require("../../controllers/passengerController");
const APIBookingController = require("../../controllers/bookingController");

router.get('/profile', APIPassengerController.getPassengerData);

router.get('/flights/', APIPassengerController.getPassengerFlights);
router.get('/flights/:flight_id', APIPassengerController.getPassengerFlight);

router.post('/flights/book/:flight_id', APIBookingController.bookFlight);

router.get('/bookings', APIPassengerController.getPassengerBookings);
router.get('/bookings/booking_id', APIPassengerController.getPassengerBooking);


module.exports = router;