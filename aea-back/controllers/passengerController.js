let db = require("../database/models");
const Airline = require('../database/models/Airline');
const Booking = require("../database/models/Booking");
const Flight = require("../database/models/Flight");
const Passenger = require("../database/models/Passenger");
const { response } = require("express");

const passengerController = {
    getPassengerData: (req, res) => {
        res.send("getPassengerData")
        db.Booking.findByPk(req.params.passenger_id)
        .then((response) => {
            res.send(response)
        })
    },   
    getPassengerBookings: (req, res) => {
        res.send("getPassengerBookings")
        db.Booking.findAll({
            where: {
                passenger_id: req.params.passenger_id
            }
        })
        .then((response) => {
            res.send(response)
        })
    },    
    getPassengerBooking: (req, res) => {
        res.send("getPassengerBooking")
        db.Booking.findAll({
           where: {
            passenger_id: req.params.passenger_id,
            booking_id: req.params.booking_id
        }
        })
        .then((response) => {
            res.send(response)
        })
    },
    getPassengerFlights: (req, res) => {
        res.send("getPassengerFlights")
        try {
            db.Flight.findAll({
                where: {
                    passenger_id: req.params.passenger_id
                }
            })
            .then((response) => {
                res.send(response)
            })
        } catch (error) {
            console.info(error)
            return
        }
    },
    getPassengerFlight: (req, res) => {
        res.send("getPassengerFlight")
        db.Flight.findAll({
           where: {
            passenger_id: req.param.passenger_id,
            flight_id: req.params.flight_id
            }
        })
        .then((response) => {
            res.send(response)
        })
    },
    createPassenger: (req, res) => {
        res.send("createPassenger")
        db.Passenger.create({
            dni: req.body.dni,
            name: req.body.name,
            last_name: req.body.last_name
        })
    }
}

module.exports = passengerController;