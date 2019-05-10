require('dotenv').config()

const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const cors = require('cors')
const routes = require('./routes')
const bodyParser = require( 'body-parser' );

mongoose.connect(process.env.MONGOOSE_CONNECT, { useNewUrlParser: true }, (err) => {
    if (err){
        console.log(err);
        console.log(`cannot connect using ${process.env.MONGOOSE_CONNECT}`);
    }
    else console.log('connection to mongo db instance success')
});


app
.use(express.json({limit: '50MB'}))
.use(express.urlencoded({extended : true, limit: '50MB'}))
.use(cors())
app.use('/', routes)



app.use(function (error, req, res, next) {
    console.log('~~~caught by last error middlware~~~')
    if (error.fromRoute) console.log(error.fromRoute)
    console.log(error)
    console.log('~~~~~~')
    if (!error.statusCode) error.statusCode = 500
    res.status(error.statusCode).json({ message: error.message, error });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}...`)
})

