let db = require("../database/models");
const Airline = require('../database/models/Airline');
const Booking = require("../database/models/Booking");
const Flight = require("../database/models/Flight");
const Passenger = require("../database/models/Passenger");
const { response } = require("express");

const passengerController = {
    getFlights: (req, res) => {
        db.Flight.findAll({
            where: {
                seats_available: !0
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
        db.Transfer.findAll()
        .then((response)=> {
            res.send(response)
        }) 
    },
    getAirLine: async (req, res) => {
        db.Transfer.findAll({
            where: {
                airline_id: req.params.airline_id
            }
        })
        .then((response)=>{
            res.send(response)
        })  
    },
    createTransfer: async (req, res) => {
        let cashOrigin = await db.Account.findByPk(req.body.originAccountId);
        let cashDestiny = await db.Account.findByPk(req.body.destinyAccountId);
        
        if ( cashOrigin.cash - parseInt(req.body.amount) > 0){
            await db.Account.update(
                {cash: cashOrigin.cash-parseInt(req.body.amount)},
                {where: {accountId: req.body.originAccountId}}
            )
            await db.Account.update(
                {cash: cashDestiny.cash+parseInt(req.body.amount)},
                {where: {accountId: req.body.destinyAccountId}}
            )
            await db.Transfer.create({
                clientId: req.body.clientId,
                originAccountId: req.body.originAccountId,
                destinyAccountId: req.body.destinyAccountId,
                amount: req.body.amount
            }) 
        } 
        res.send("status 200")
    }
}

module.exports = passengerController;