const restful = require('node-restful')
const Schema = restful.mongoose.Schema
//definindo o schema curso
const  contatoSchema = new Schema({
    
        data: { type: Date },
        nome: { type: String },
        email: {type: String},
        assunto: { type: String }
       })
module.exports = restful.model('contato', contatoSchema)