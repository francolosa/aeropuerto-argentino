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
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE,
        },
    }, { 
        tableName: "airline",
        underscored: true
     })


    return Airline;
}