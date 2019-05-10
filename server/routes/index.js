const router = require('express').Router()
const createFilePath = require('../middlewares/createFilePath')
const Controller = require('../controllers/Controller')
const images = require('../middlewares/images')
router.get('/', (req, res) => {
    res.status(200).json({msg : 'connected'})
})

router.post('/upload', createFilePath, images.sendUploadToGCS, Controller.postPicture)



module.exports = router