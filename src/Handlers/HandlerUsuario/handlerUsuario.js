const { getAsync, postAsync } = require("../../Controllers/ControllerUsuario/controllerUsuario");

const get = async (req, res) => {
    try {
        const response = await getAsync();
        return res.status(200).json(response)
    } catch (error) {
        console.log("error", error.message);
        return res.status(400).json({error: error.message})
    }
}
const post = async (req, res) => {
        const { id } = req.body;
    try {
        const response = await postAsync(id);
        return res.status(200).json(response)
    } catch (error) {
        console.log("error", error.message);
        return res.status(400).json({error: error.message})
    }
}

module.exports = {
    get,
    post
}