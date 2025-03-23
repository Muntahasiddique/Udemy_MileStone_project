const Product = require('../models/product.model')
function getCart(req, res) {
    res.render('customers/cart/cart'  );
}
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
function updateCartItem(req, res) {
  const cart = res.locals.cart;

 const updatedItemData = cart.updateItem(
    req.body.productId,
    req.body.quantity
  )
    req.session.cart = cart;
    res.json({
    message: 'Cart updated successfully',
    newTotalItems: cart.totalQuantity,
    newTotalPrice: cart.totalPrice,
    updatedItemPrice: updatedItemData. updatedItemPrice,

    })
}
module.exports = {
    addCartItem,
    getCart,
    updateCartItem
}   

