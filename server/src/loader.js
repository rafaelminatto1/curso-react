const server = require('./config/server')
require('./config/db')
const rotas = require('./config/routes')
rotas(server)

