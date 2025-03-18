const Users = require('../models/user.model'); // ✅ Correct import
const authUtil = require('../util/authentication');

function getSignup(req, res, next) {
    res.render('customers/auth/signup');
}

async function Signup(req, res, next) {
    const user = new Users(
        req.body.Email,
        req.body.Password,
        req.body.FullName,
        req.body.Street,
        req.body.PostalCode,
        req.body.City
    );
    await user.signup();
    res.redirect('/login');
}

function getLogin(req, res, next) {
    res.render('customers/auth/login');
}

async function login(req, res) {
    const user = new Users(req.body.Email, req.body.Password);
    const ExistingUser = await user.getuserWithSameEmail();

    if (!ExistingUser) {
        res.redirect('/login');
        return;
    }

    const passwordIsCorrect = await user.passwordIsCorrect(ExistingUser.password);
    if (!passwordIsCorrect) {
        res.redirect('/login');
        return;
    }

    authUtil.CreateUserSession(req, ExistingUser, function() { 
        res.redirect('/'); 
    });
}
function logout(req, res) {
    authUtil.DestroyUserSession(req, function() {
        res.redirect('/login');
    });
}


module.exports = {
    getSignup,
    getLogin,
    Signup,
    login,
    logout
};
