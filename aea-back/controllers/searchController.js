let db = require("../database/models");
const { Op } = require("sequelize")
const Airline = require('../database/models/Airline');
const Booking = require("../database/models/Booking");
const Flight = require("../database/models/Flight");
const Passenger = require("../database/models/Passenger");
const { response } = require("express");

const passengerController = {
    getFlights: (req, res) => {
        console.log("hola")
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
    },
    getFlight: (req, res) => {
        db.Flight.findByPk(req.params.flight_id)
            .then((response) => {
            res.send(response)
        })
    },
    getAirLines: async (req, res) => {
        db.Airline.findAll()
        .then((response)=> {
            res.send(response)
        }) 
    },
    getAirLine: async (req, res) => {
        db.Airline.findAll({
            where: {
                airline_id: req.params.airline_id
            }
        })
        .then((response)=>{
            res.send(response)
        })  
    }
}

module.exports = passengerController;