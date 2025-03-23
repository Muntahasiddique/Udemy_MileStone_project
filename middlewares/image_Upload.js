const multer = require('multer');
const uuid = require('uuid').v4;
const Upload = multer({
    storage: multer.diskStorage({
        destination:'product-data/images',
        filename: function(req, file, cb){
            cb(null,uuid() + '-' + file.originalname);
        }
    })

})
const configurationMulterMiddleware = Upload.single('image');
module.exports = configurationMulterMiddleware;