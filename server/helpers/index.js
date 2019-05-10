const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'secret'
// const { Storage } = require('@google-cloud/storage')
const giveJwtToken = user => {
    return jwt.sign({ _id: user._id, name: user.name, email: user.email }, secret)
}
const verifyJwtToken = token => {
    return jwt.verify(token, secret)
}

const checkDate = date => !date || date == 'Invalid Date';
const isEmail = val => /\w+@\w+\.\w+/.test(val)

const generateStringOfNumber = (length) => Array.from(Array(length), _ => ~~(Math.random() * 10)).join('')
const givesError = (statusCode, msg, payload) => {
    let error = new Error(msg || `internal server error`)
    error.handled = true
    error.statusCode = statusCode || 500
    error.msg = msg || `internal server error`
    if (payload) error.payload = payload
    // err.nb =  
    return error
}
const wrapAsync = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

module.exports = {
    wrapAsync, givesError, checkDate, isEmail, giveJwtToken, verifyJwtToken
}