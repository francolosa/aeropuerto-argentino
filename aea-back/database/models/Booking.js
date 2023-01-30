module.exports = (sequelize, dataTypes) => {
    const Booking = sequelize.define('Booking', {
        booking_id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        passenger_id: {
            type: dataTypes.INTEGER,
        },
        flight_id: {
            type: dataTypes.INTEGER,
        },
        seat: {
            type: dataTypes.INTEGER,
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    }, { 
        tableName: "booking",
        timestamps: true
     })


    return Booking;
}