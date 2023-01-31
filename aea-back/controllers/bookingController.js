let db = require("../database/models");
const Airline = require('../database/models/Airline');
const Booking = require("../database/models/Booking");
const Flight = require("../database/models/Flight");
const Passenger = require("../database/models/Passenger");
const { response } = require("express");

const bookingController = {
    bookFlight: async (req, res) => {
        let flight_to_book = await db.Flight.findByPk(req.params.flight_id);
        let seats_available = await flight_to_book.seats_available;
        let flight_booked;
        let booking;
        
        if (seats_available > 0) {
            flight_booked = await db.Flight.update(
                { seats_available: seats_available - 1 },
                { where: { flight_id: req.body.flight_id } }
            )
            booking = await db.Booking.create(
                { passenger_id: req.params.passenger_id,
                  flight_id: req.params.flight_id
                },
            )
            return booking
        }
        res.send("status 200")
    }
}

module.exports = bookingController;