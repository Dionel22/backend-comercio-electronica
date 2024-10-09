const { Router } = require("express");
const { get, post } = require("@/Handlers/HandlerUsuario/handlerUsuario");

const routerUsuario = Router();

routerUsuario.get("", get);
routerUsuario.post("", post);

module.exports = routerUsuario;