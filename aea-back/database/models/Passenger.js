module.exports = (sequelize, dataTypes) => {
    const Passenger = sequelize.define('Passenger', {
        passenger_id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dni: {
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    }, { 
        tableName: "passenger",
        underscored: true
     })
    

    return Passenger;
}