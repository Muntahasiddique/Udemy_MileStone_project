const Product = require('../models/product.model')
async function addCartItem(req, res, next) {
    try {
        const product = await Product
            .findById(req.body.productId)
        res.locals.cart.addItem(product)
    }
    catch (error) {
        next(error)
        return;
    }  
    const cart = res.locals.cart
    req.session.cart = cart
    res.status(201).json({ 
        message: 'Product added to cart successfully',
       newTotalItems: cart.totalQuantity
     
    }) 
}
module.exports = {
    addCartItem
}   

