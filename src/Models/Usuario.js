const { DataTypes } = require("sequelize");

module.exports = usuarioModel = (sequelize) => {
    sequelize.define("Usuario",{
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Mail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Contraseña: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Vendedor: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        Admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
}