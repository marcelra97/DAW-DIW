const express = require('express');
const path = require('path');
const app = express();

// Nos conectaremos a la base de datos
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Conectando en si mismo
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true}).then(()=>{
        console.log(" * Cargada y preparada en 2019");
    }).catch(err => {
        console.log(" Algo ha pasado...saliendo : ",err);
        process.exit();
    });

// Paginas publicas (estaticas)
app.use(express.static(path.join(__dirname, 'public')));

// Require Puntuaciones routes
require('./app/routes/puntuaciones.routes.js')(app);

// Escuchemos en un puerto
app.listen(3000, () => {
    console.log(" * Miniserver UP and Running en http://localhost:3000");
});