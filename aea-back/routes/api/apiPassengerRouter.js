var express = require('express');
var router = express.Router();
const APIPassengerController = require("../../controllers/passengerController");
const APIBookingController = require("../../controllers/bookingController");
const userLogged = require("../../middlewares/userLogged");

router.get('/bookings/:booking_id?', userLogged, APIPassengerController.getPassengerBookings);

router.post('/flights/:flight_id?/book/', userLogged, APIBookingController.bookFlight);
router.get('/flights/:flight_id?', userLogged, APIPassengerController.getPassengerFlight);

router.post('/signIn/', APIPassengerController.signInPassenger);
router.post('/logIn/', APIPassengerController.logInPassenger);
router.post('/logOut/', userLogged, APIPassengerController.logOutPassenger);
router.get('/profile', userLogged, APIPassengerController.getPassengerData);

module.exports = router;