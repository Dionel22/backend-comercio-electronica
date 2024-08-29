const { DataTypes } = require("sequelize");

module.exports = productoModel = (sequelize) => {
    sequelize.define("Producto",{
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Imagen: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        Descripcion: {
            type: DataTypes.TEXT,
        },
        Cantidad: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        Disponible: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        Precio: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
}