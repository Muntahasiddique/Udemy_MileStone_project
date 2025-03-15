const Users = require('../models/user.model')

function getSignup (req , res , next){
    res.render('customers/auth/signup')
}
async function Signup(req , res , next){
   const User= new Users(req.body.Email,req.body.Password,req.body.FullName,req.body.Street,
    req.body.PostalCode,
    req.body.City,
   );
  await User.signup();
  res.redirect('/login')
}

function getLogin (req , res , next){
    res.render('customers/auth/login')
}

module.exports = {
    getSignup : getSignup,
    getLogin :getLogin ,
    Signup:Signup

}