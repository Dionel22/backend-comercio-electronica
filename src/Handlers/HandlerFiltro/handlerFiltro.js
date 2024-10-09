const getFilter = require("../../Controllers/ControllerFiltro/controllerFiltro");

const get = async (req, res) => {
    try {
        const response = await getFilter();
        return res.status(200).json(response)
    } catch (error) {
        console.log("error", error.message);
        return res.status(400).json({error: error.message})
    }
}

module.exports = {
    get
}