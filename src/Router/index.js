const { Router } = require("express");
const routerUsuario = require("@/RouterUsuario/routerUsuario");
const routerProducto = require("@/RouterProducto/routerProducto");

const router = Router();

router.use("/Usuario", routerUsuario);
router.use("/Producto", routerProducto);
router.use("/Filtro", ()=>{});

module.exports = router;