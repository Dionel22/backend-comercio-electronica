const { DataTypes } = require("sequelize");

module.exports = PasarelaDePagoModel = (sequelize) => {
    sequelize.define("PasarelaDePago",{
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Cantidad: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        FechaDeCompra: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Precio: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        PrecioTotal: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });
}