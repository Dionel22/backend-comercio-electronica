const { Router } = require("express");
const routerUsuario = require("@/RouterUsuario/routerUsuario");
const routerProducto = require("@/RouterProducto/routerProducto");
const routerFiltro = require("@/RouterFiltro/routerFiltro");
const routerPuntuacion = require("./RouterPuntuacion/routerPuntuacion");

const router = Router();

router.use("/Usuario", routerUsuario);
router.use("/Producto", routerProducto);
router.use("/Filtro", routerFiltro);
router.use("/Puntuacion", routerPuntuacion);

module.exports = router;