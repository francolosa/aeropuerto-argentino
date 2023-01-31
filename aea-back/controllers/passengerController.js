let db = require("../database/models");
const Airline = require('../database/models/Airline');
const Booking = require("../database/models/Booking");
const Flight = require("../database/models/Flight");
const Passenger = require("../database/models/Passenger");
const { response } = require("express");

const passengerController = {
    getPassengerData: (req, res) => {
        db.Booking.findByPk(req.params.passenger_id)
        .then((response) => {
            res.send(response)
        })
    },   
    getPassengerBookings: (req, res) => {
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
        db.Flight.findAll({
            where: {
                passenger_id: req.params.passenger_id
            }
        })
        .then((response) => {
            res.send(response)
        })
    },
    getPassengerFlight: (req, res) => {
        db.Flight.findAll({
           where: {
            passenger_id: req.param.passenger_id,
            flight_id: req.params.flight_id
            }
        })
        .then((response) => {
            res.send(response)
        })
    }
}

module.exports = passengerController;