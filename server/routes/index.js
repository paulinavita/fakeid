const router = require('express').Router()
const createFilePath = require('../middlewares/createFilePath')
const Controller = require('../controllers/Controller')
const images = require('../middlewares/images')
const images2 = require('../middlewares/images2')

router.get('/', (req, res) => {
    res.status(200).json({msg : 'connected'})
})

router.post('/upload', createFilePath, images.sendUploadToGCS, Controller.postPicture)
router.post('/ktpfoto', images.multer.single('image'), images2.sendUploadToGCS, Controller.addKTPphoto)

module.exports = router