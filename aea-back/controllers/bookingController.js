let db = require("../database/models");
const Airline = require('../database/models/Airline');
const Booking = require("../database/models/Booking");
const Flight = require("../database/models/Flight");
const Passenger = require("../database/models/Passenger");
const { response } = require("express");

const bookingController = {
    bookFlight: async (req, res) => {
        try {
            let flight_to_book = await db.Flight.findByPk(req.body.flight_id);
            let passenger_exists = await db.Passenger.findByPk(req.body.passenger_id);
            
            let passenger_books = await db.Booking.findAll({ where: {passenger_id: req.body.passenger_id}});
            let passenger_already_booked = await passenger_books.find(flight_id => flight_id = req.body.flight_id);
            if(passenger_already_booked){
                return res.send("El pasajero ya tiene una reserva en este vuelo, para modificar su reserva vaya al siguiente link")
            }

            let flight_booked;
            let booking;

            if(!passenger_exists){
                return res.send("No existe pasajero seleccionado")
            }
            if(!flight_to_book){
                return res.send("No existe vuelo seleccionado")
            }

            let seats_available = await flight_to_book.seats_available;
            if (seats_available > 0) {
                flight_booked = await db.Flight.update(
                    { seats_available: seats_available - 1 },
                    { where: { flight_id: req.body.flight_id } }
                )
                booking = await db.Booking.create(
                    { passenger_id: req.body.passenger_id,
                      flight_id: req.body.flight_id,
                      seat: req.body.seat
                    },
                )
                console.log(booking)
                res.send(booking)
            } else {
                res.send("No hay mas asientos para el vuelo seleccionado")
            }
        } catch (error) {
            console.info(error)
            return
        }
    }
}

module.exports = bookingController;