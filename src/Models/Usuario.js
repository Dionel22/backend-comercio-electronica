const { DataTypes } = require("sequelize");

module.exports = usuario = (sequelize) => {
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
        TipoUsuario: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Admin: {
            type: DataTypes.BOOLEAN,
            
        }
    });
}