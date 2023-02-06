let db = require("../database/models");
const { Op } = require("sequelize")
const Airline = require('../database/models/Airline');
const Booking = require("../database/models/Booking");
const Flight = require("../database/models/Flight");
const Passenger = require("../database/models/Passenger");
const { response } = require("express");
const { search } = require("../routes");

const passengerController = {
    getFlights: (req, res) => {
        if (req.params.flight_id) {
            db.Flight.findByPk(req.params.flight_id)
                .then((response) => {
                    res.send(response)
                })
        } else {
            db.Flight.findAll({
                where: {
                    seats_available: {
                        [Op.ne]: 0
                    }
                }
            })
                .then((response) => {
                    res.send(response)
                })
        }

    },
    getAirLines: async (req, res) => {
        if (req.params.airline_id) {
            db.Airline.findAll({
                where: {
                    airline_id: req.params.airline_id
                }
            })
                .then((response) => {
                    res.send(response)
                })
        } else {
            db.Airline.findAll()
                .then((response) => {
                    res.send(response)
                })
        }
    },
    searchByDestination: async (req, res) => {
        try {
            db.Flight.findAll({
                where: { 
                    destination: req.params.destination,
                    seats_available: {
                        [Op.ne]: 0
                    }
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
    searchByOrigin: async (req, res) => {
        try {
            db.Flight.findAll({
                where: { 
                    origin: req.params.origin,
                    seats_available: {
                        [Op.ne]: 0
                    }
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
    searchByDestinationAndOrigin: async (req, res) => {
        try {
            db.Flight.findAll({
                where: { 
                    destination: req.params.destination,
                    origin: req.params.origin,
                    seats_available: {
                        [Op.ne]: 0
                    }
                }
            })
                .then((response) => {
                    if(response.length > 0){
                        res.send(response) 
                    } else {
                        res.send("No hay vuelos para la busqueda seleccionada");
                    }
                })
        } catch (error) {
            console.info(error)
            return
        }
    }
}

module.exports = passengerController;