function errorhandling(error , req , res , next){
console.log(error)
if(error.statusCode === 404){
    return res.status(404).render('Shared/404')
}
res.status(500).render('Shared/500')
}
module.exports =errorhandling;