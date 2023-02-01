let db = require("../database/models");
const Airline = require('../database/models/Airline');
const Booking = require("../database/models/Booking");
const Flight = require("../database/models/Flight");
const Passenger = require("../database/models/Passenger");
const { response } = require("express");

const passengerController = {
    getPassengerData: (req, res) => {
        try {
            db.Passenger.findOne({
                where: {
                    email: req.session.email
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
    getPassengerBookings: (req, res) => {
        res.send("getPassengerBookings")
        try {
            db.Booking.findAll({
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
    getPassengerBooking: (req, res) => {
        res.send("getPassengerBooking")
        try {
            db.Booking.findAll({
                where: {
                    passenger_id: req.params.passenger_id,
                    booking_id: req.params.booking_id
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
        try {
            db.Flight.findAll({
                where: {
                    passenger_id: req.param.passenger_id,
                    flight_id: req.params.flight_id
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
    signInPassenger: (req, res) => {
        res.send("createPassenger")
        try {
            db.Passenger.create({
                dni: req.body.dni,
                name: req.body.name,
                last_name: req.body.last_name
            })
        } catch (error) {
            console.info(error)
            return
        }
    },
    logInPassenger: async (req, res) => {
        try {            
            let logIn = await db.Passenger.findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })
            if(logIn != undefined){
                req.session.email = req.body.email;
                return res.send("logueado correctamente")
            } else {
                return res.send("usuario o contraseña invalidos")
            } 
        } catch (error) {
            console.info(error)
            return
        }
    }
}

module.exports = passengerController;