const Router = require("express")
const { exampleController } = require("../../../controllers/exampleController")


const exampleSubRouter = Router()

exampleSubRouter.get("/",exampleController)

module.exports = exampleSubRouter