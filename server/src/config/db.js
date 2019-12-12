const mongoose = require("mongoose");
mongoose.Promise = global.Promise; //para evitar warnings entre db e server
module.exports = mongoose.connect('mongodb://localhost:27017/cursos', {useNewUrlParser: true, useUnifiedTopology: true})