require("dotenv").config();
const { Sequelize } = require("sequelize");
const usuarioModel = require("@/Model/Usuario");
const productoModel = require("@/Model/Producto");
const pasarelaDePagoModel = require("@/Model/PasarelaDePago");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
  logging: false,
});

usuarioModel(sequelize);
productoModel(sequelize);
pasarelaDePagoModel(sequelize);

const { Usuario, Producto, PasarelaDePago } = sequelize.models;

Usuario.belongsToMany(Producto, { through: PasarelaDePago});
Producto.belongsToMany(Usuario, { through: PasarelaDePago});

module.exports = {
    ...sequelize.models,
    sequelize
}