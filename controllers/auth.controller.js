const Users = require('../models/user.model')
const authUtil = require('../util/authentication')
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
async function login(req , res ){
 const user = new  User (req.body.Email , req.body.Password);
 const ExistingUser = await user.getuserWithSameEmail();
 if(!ExistingUser){
    res.redirect('/login');
    return;
 }
 const Passwordiscorrct = user.Passwordiscorrct(ExistingUser.Password  );
if(!Passwordiscorrct){
    res.redirect('/login')
    return;
}
authUtil.CreateUserSession(req , ExistingUser , function(){
    res.redirect('/')
})

}
module.exports = {
    getSignup : getSignup,
    getLogin :getLogin ,
    Signup:Signup

}