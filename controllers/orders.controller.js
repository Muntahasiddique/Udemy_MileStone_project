const Order = require('../models/order.model');
const User = require('../models/user.model');

function getOrders(req, res){
    res.render('customers/orders/all-orders');
}

async function addOrder(req, res , next){ {
   const cart = res.locals.cart;
   
let userDocument;
try{
    userDocument = await User.findById(res.locals.uid);
}
catch(error){
    return next(error);
}
const order = new  Order(cart , userDocument);
try{
    await order.save();


}
catch(error){
    return next(error);
}
req.session.cart = null;
res.redirect('/orders');
}
}
module.exports = {
    addOrder,
    getOrders
}