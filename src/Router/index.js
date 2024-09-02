const { Router } = require("express");

const router = Router();

router.use("/Usuario", ()=>{});
router.use("/Producto", ()=>{});
router.use("/Filtro", ()=>{});

module.exports = router;