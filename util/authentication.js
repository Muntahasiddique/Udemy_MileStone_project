function CreateUserSession(req , User , action){
    req.session.uid = user._id.toString(); 
req.session.save();
}
module.exports ={
    CreateUserSession : CreateUserSession
};