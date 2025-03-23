const express = require ('express');
const router = express.Router();
const adminController = require('../controllers/admin.Controller');
const imageUploadMiddleware = require('../middlewares/image_Upload');
router.get('/products' ,adminController.getProducts)
router.get('/products/new' ,adminController.getNewProducts)
router.post('/products', imageUploadMiddleware, adminController.CreateNewProducts);
router.get('/products/:id', adminController.getUpdateProduct);
router.post('/products/:id', imageUploadMiddleware, adminController.updateProduct);


module.exports=router;