function errorhandling(error , req , res , next){
console.log(error)
res.status(500).render('Shared/500')
}
module.exports =errorhandling;