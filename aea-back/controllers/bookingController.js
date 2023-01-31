let db = require("../database/models");
const Airline = require('../database/models/Airline');
const Booking = require("../database/models/Booking");
const Flight = require("../database/models/Flight");
const Passenger = require("../database/models/Passenger");
const { response } = require("express");

const bookingController = {
    bookFlight: async (req, res) => {
        let cashOrigin = await db.Account.findByPk(req.body.originAccountId);
        let cashDestiny = await db.Account.findByPk(req.body.destinyAccountId);

        if (cashOrigin.cash - parseInt(req.body.amount) > 0) {
            await db.Account.update(
                { cash: cashOrigin.cash - parseInt(req.body.amount) },
                { where: { accountId: req.body.originAccountId } }
            )
            await db.Account.update(
                { cash: cashDestiny.cash + parseInt(req.body.amount) },
                { where: { accountId: req.body.destinyAccountId } }
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

module.exports = bookingController;