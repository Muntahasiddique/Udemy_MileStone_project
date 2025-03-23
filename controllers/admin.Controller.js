const Product = require('../models/product.model');
function getProducts(req, res){
res.render('admin/products/allproducts')
}
function getNewProducts(req , res){
res.render('admin/products/newproducts')

}
async function CreateNewProducts(req , res , next){
 const product= new Product({
    ...req.body,//having all the data from the form as we are using one parameter in the Model Constructor
    image:req.file.filename}
 )
 try{
     await product.save();}
    catch (error){
        next(error)
        return;
    }

res.redirect('/admin/products')
}
module.exports={
    getProducts,
    getNewProducts,
    CreateNewProducts
}