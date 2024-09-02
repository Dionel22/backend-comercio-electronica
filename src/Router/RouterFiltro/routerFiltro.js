const { Router } = require("express");
const { get } = require("@/Handlers/HandlerFiltro/handlerFiltro")

const routerFiltro = Router();

routerFiltro.get("", get);

module.exports = routerFiltro;