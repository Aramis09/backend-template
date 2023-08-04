const Router = require("express")
const { exampleToGet,exampleToPut,exampleToCreate } = require("../../../controllers/exampleController")


const exampleSubRouter = Router()

exampleSubRouter.get("/",exampleToGet)
exampleSubRouter.post("/createItem",exampleToCreate)
exampleSubRouter.put("/modifyItem",exampleToPut)



module.exports = exampleSubRouter