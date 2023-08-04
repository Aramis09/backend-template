const { Example } = require("../src/db")

async function exampleController(req,res) {
  const newExample = await Example.create({
    name:"Pepito"
  })
  res.status(200).send({
    siVaKpo: newExample
  })
}

module.exports = {
  exampleController
}