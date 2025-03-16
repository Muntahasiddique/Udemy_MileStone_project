function addcsurfmiddleware(req , res , next){
res.locals.csurftoken = req.csurfToken();
next()
}
module.exports=addcsurfmiddleware;