module.exports = (sequelize, dataTypes) => {
    const Flight = sequelize.define('Flight', {
        flight_id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        departure_time: {
            type: dataTypes.DATE,
        },
        boarding_time: {
            type: dataTypes.DATE,
        },
        seats_available: {
            type: dataTypes.INTEGER,
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    }, { 
        tableName: "flight",
        timestamps: true
     })


    return Flight;
}