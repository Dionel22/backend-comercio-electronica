const { DataTypes } = require("sequelize");

module.exports = puntuacionModel = (sequelize) => {
    sequelize.define("Puntuacion", {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Descripcion: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Puntuacion: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });
}