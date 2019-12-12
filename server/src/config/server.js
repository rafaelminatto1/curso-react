
const port = 3200;
//middlewares - singletons: commons js
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('./cors')
const server = express(); //novo servidor
//para toda requisição que chegar, use o bodyparser para
//interpretar chegadas no formato urlencoded
server.use(bodyParser.urlencoded({ extended: true }))
//considera o formato json no corpo da requisição
server.use(bodyParser.json())
server.use(cors)
server.listen(port, function () {
 //template string (observe a crase)
 console.log(`servidor no ar, na porta ${port}`)
});
module.exports =server