'use strict'

require('dotenv').config(); //load enviroment variable

global.__basedir = __dirname

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');

const routes = require('./routes');

const logInfo = require('./helper/logger').infolog

const port = process.env.SERVERPORT;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors());

app.use((err, req, res, next)=> {
    console.log(err)
    res.send('error')
})

 console.log(__dirname + '/asset/images/')

app.use(routes)

app.listen(
    port,
    () => {
        logInfo.info("Server Running At " + new Date())
        console.log("App Running at Port : " + port);
    }
)
module.exports = routes;