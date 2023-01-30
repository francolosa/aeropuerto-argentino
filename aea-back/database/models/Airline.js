module.exports = (sequelize, dataTypes) => {
    const Airline = sequelize.define('Airline', {
        airline_id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.TEXT
        },
        flight_id: {
            type: dataTypes.INTEGER,
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE,
        },
    }, { 
        tableName: "airline",
        timestamps: true
     })


    return Airline;
}