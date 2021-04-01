const mongo = require('mongoose')
const variables = require('./config/variables')

//Conectando com a database
mongo.connect(variables.Database.connection, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(
    () => {
        console.log('conection established');
    }).catch(err => {
        console.log(`db error ${err.message}`);
    process.exit(-1)
    });

//exportando para poder ser utilizado em outro arquivo
module.exports = mongo