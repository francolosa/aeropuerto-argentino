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
    getPassengerBookings: async (req, res) => {
        try {
            if(req.params.booking_id){
                db.Booking.findByPk(req.params.booking_id)
                .then((response) => {
                    res.send(response)
                })
            } else {
            console.log("bookings")
                let passenger = await db.Passenger.findOne({
                    where: {
                        emaiL: req.session.email
                    }
                })
                db.Booking.findAll({
                    where: {
                        passenger_id: passenger.passenger_id
                    }
                })
                    .then((response) => {
                        res.send(response)
                    })
                }
        } catch (error) {
            console.info(error)
            return
        }
    },
    getPassengerFlight: (req, res) => {
        try {
            if(req.params.flight_id){
                db.Flight.findByPk(req.params.flight_id)
                .then((response) => {
                    res.send(response)
                })
            } else {
                db.Flight.findAll()
                .then((response) => {
                    res.send(response)
                })
            }
        } catch (error) {
            console.info(error)
            return
        }
    },
    signInPassenger: (req, res) => {
        try {
            db.Passenger.create({
                dni: req.body.dni,
                email: req.body.email.toUpperCase(),
                name: req.body.name.toUpperCase(),
                last_name: req.body.last_name.toUpperCase(),
                password: req.body.password
            })
            .then((response) => {
                res.send(response)
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
    },
    logOutPassenger: async (req, res) => {
        try {            
            req.session.destroy(()=>{
                res.send("deslogueo exitoso")
            })
        } catch (error) {
            console.info(error)
            return
        }
    }
}

module.exports = passengerController;