const router = require('express').Router()
const createFilePath = require('../middlewares/createFilePath')
const Controller = require('../controllers/Controller')
const images = require('../middlewares/images')
const {User} = require('../models/user')

router.get('/', (req, res) => {
    res.status(200).json({ msg: 'connected' })
})

router.post('/upload', createFilePath, images.sendUploadToGCS, Controller.postPicture)
router.get('/userdata', (req, res) => {

    let search = {nama:new RegExp(req.query.nama, 'i')}
    console.log(search)
    console.log({ nama: new RegExp(req.query.nama, 'i') })
    User.find(search).then((user) => {
        if (user) res.json(user)
        else res.status(204).json({ msg: `data base didn't have it` })
    }).catch(err => res.status(500).json({ msg: `internal server error` }))
})
module.exports = router