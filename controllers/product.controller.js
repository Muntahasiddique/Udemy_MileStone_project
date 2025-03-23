const Product = require('../models/product.model');
async function getAllProducts(req, res, next) {
    try {
        const products = await Product.findAll();
        res.render('customers/products/all-products', { products: products });
    } catch (error) {
        next(error);
    }
}
module.exports = {
    getAllProducts,

}