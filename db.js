const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (error)=>{
    console.log(error)
})
db.once('open', ()=>{
    console.log("Banco de Dados Conectado com sucesso!")
});

module.exports = db;