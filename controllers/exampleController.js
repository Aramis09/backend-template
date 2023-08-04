const { Example } = require("../src/db")

async function exampleToGet(req,res) {
  const allItems = await Example.findAll()
  res.status(200).send({
    siVaKpo: allItems
  })
}

async function exampleToCreate(req,res) {
  const itemCreated = await Example.create({
    name:"le asignamos el nombre"
  })
  res.status(200).send({
    siVaKpo: itemCreated
  })
}
async function exampleToPut(req,res) {
  const itemFound = await Example.findOne({
    where:{
      id:1
    }
  })
  itemFound.name = "nombre modificado"
  res.status(200).send({
    siVaKpo: itemFound
  })
}

module.exports = {
  exampleToGet,
  exampleToPut,
  exampleToCreate
}