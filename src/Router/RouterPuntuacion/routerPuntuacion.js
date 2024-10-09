const { Router } = require("express");
const {  get, post, getById, put } = require("../../Handlers/HandlerPuntuacion/handlerPuntuacion");

const routerPuntuacion = Router();

routerPuntuacion.get("", get);
routerPuntuacion.get("/:id", getById);
routerPuntuacion.put("", put);
routerPuntuacion.post("", post);

module.exports = routerPuntuacion;