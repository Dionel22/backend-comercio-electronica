const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
  logging: false,
});

module.exports = {
    ...sequelize.models,
    sequelize
}