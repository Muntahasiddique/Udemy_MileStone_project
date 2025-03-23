const Product = require("../models/product.model");
async function getProducts(req, res, next) {
  try {
    const Products = await Product.findAll();
    res.render("admin/products/allproducts", { products: Products });
  } catch (error) {
    next(error);
    return;
  }
}
function getNewProducts(req, res) {
  res.render("admin/products/newproducts");
}
async function CreateNewProducts(req, res, next) {
  const product = new Product({
    ...req.body, //having all the data from the form as we are using one parameter in the Model Constructor
    image: req.file.filename,
  });
  try {
    await product.save();
  } catch (error) {
    next(error);
    return;
  }

  res.redirect("/admin/products");
}

async function getUpdateProduct(req, res,next) {
    try{
 const product =await Product.findById(req.params.id);
 res.render("admin/products/update-product", { product: product });
}
 catch(error){
     next(error);
     return;}
  
}
async function updateProduct(req, res, next) {
const product = new Product({
    ...req.body,
    _id: req.params.id,
  });
  if(req.file){
    //replce old image with new image
    product.replceImage(req.file.filename); }
    try{

  await  product.save();}
    catch(error){
        next(error);
        return;
    }
    res.redirect("/admin/products");   
 

}
async function deleteProduct(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    await product.remove();
  
  } catch (error) {
    next(error);
    return;
  }
res.json({message:'successfully Deleted'});
}
module.exports = {
  getProducts,
  getNewProducts,
  CreateNewProducts,
    getUpdateProduct,
    updateProduct,
    deleteProduct
};
