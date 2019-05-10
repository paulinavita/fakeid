require('dotenv').config()

const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const cors = require('cors')
const routes = require('./routes')
const bodyParser = require( 'body-parser' );

mongoose.connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true, useCreateIndex: true })
.then(() => { console.log(('====>> Yay MongoDB Conected <<====')) })
.catch(err => { console.log(err); })


app
.use(express.json({limit: '50MB'}))
.use(express.urlencoded({extended : true, limit: '50MB'}))
.use(cors())
app.use('/', routes)

app.listen(port, function() {
    console.log(`Listening on port ${port}...`)
})

