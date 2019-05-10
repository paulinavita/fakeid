
class Controller {

    static async postPicture(req, res) {
        try {
            console.log(req.file, 'heheheeh');
            res.status(200).json(req.file)
        } catch (error) {
            res.status(500).json(error)

        }
        
        
    }
}

module.exports = Controller