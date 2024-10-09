
const getAsync = async (req, res) => {
    try {
        //const response = await ()=>{};
        return res.status(200).json(response)
    } catch (error) {
        console.log("error", error.message);
        return res.status(400).json({error: error.message})
    }
}
const postAsync = async (req, res) => {
    try {
        //const response = await ()=>{};
        return res.status(200).json(response)
    } catch (error) {
        console.log("error", error.message);
        return res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAsync,
    postAsync
}