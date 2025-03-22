function getProducts(req, res){
res.render('admin/products/allproducts')
}
function getNewProducts(req , res){
res.render('admin/products/newproducts')

}
function CreateNewProducts(){

}
module.exports={
    getProducts,
    getNewProducts,
    CreateNewProducts
}