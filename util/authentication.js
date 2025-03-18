function CreateUserSession(req, user, callback) { 
    req.session.uid = user._id.toString(); 
    req.session.save(callback); 
}
function DestroyUserSession(req, callback) { 
    req.session.destroy(callback); 
}

module.exports = { CreateUserSession, DestroyUserSession };