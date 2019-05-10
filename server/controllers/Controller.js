const { wrapAsync, givesError } = require('../helpers')
const { User } = require('../models/user')
class Controller {
    static async postPicture(req, res, next) {
        try {
            let user = { nama: req.body.nama, img: req.file.cloudStoragePublicUrl }
            user = await User.create(user)
            if (user) res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller