const { Router } = require("express");
const { get, getById, put, post } = require("@/Handlers/HandlerProducto/handlerProducto")

const routerProducto = Router();

routerProducto.get("", get);
routerProducto.get("/:Id", getById);
routerProducto.put("", put);
routerProducto.post("", post);

module.exports = routerProducto;