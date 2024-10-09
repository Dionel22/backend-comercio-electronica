require("dotenv").config();
const { Sequelize } = require("sequelize");
const usuarioModel = require("@/Model/Usuario");
const productoModel = require("@/Model/Producto");
const pasarelaDePagoModel = require("@/Model/PasarelaDePago");
const puntuacionModel = require("@/Model/Puntuacion");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
  logging: false,
});

usuarioModel(sequelize);
productoModel(sequelize);
pasarelaDePagoModel(sequelize);
puntuacionModel(sequelize);

const { Usuario, Producto, PasarelaDePago, Puntuacion } = sequelize.models;

//usuario venta
Usuario.hasMany(Producto);
Producto.belongsTo(Usuario);

//usuario compra
Usuario.belongsToMany(Producto, { through: PasarelaDePago});
Producto.belongsToMany(Usuario, { through: PasarelaDePago});

//usuario Puntuacion
Usuario.belongsToMany(Producto, { through: Puntuacion});
Producto.belongsToMany(Usuario, { through: Puntuacion});

module.exports = {
    ...sequelize.models,
    sequelize
}