const Users = require('../models/user.model'); // ✅ Correct import
const authUtil = require('../util/authentication');
const validation = require('../util/validation');
const Validation = require('../util/validation');
function getSignup(req, res, next) {
    try {
        res.render('customers/auth/signup');
    } catch (error) {
        next(error);
    }
}

async function Signup(req, res, next) {
   
if (!validation.userCredentialsValidation(req.body.Email, req.body.Password, req.body.FullName, req.body.Street, req.body.PostalCode, req.body.City) || !validation.emailValidation(req.body['Confirm-Email'], req.body.Email)) {
        res.redirect('/signup');
        return;
    }

    const user = new Users(
        req.body.Email,
        req.body.Password,
        req.body.FullName,
        req.body.Street,
        req.body.PostalCode,
        req.body.City
    );
    

    try {
        const existingUser = await user.existsAlready();
    if (existingUser) {
        res.redirect('/signup');
        return;
    }
        await user.signup();
    } catch (error) {
        next(error);
        return;
    }
    res.redirect('/login');
}

function getLogin(req, res, next) {
    try {
        res.render('customers/auth/login');
    } catch (error) {
        next(error);
    }
}

async function login(req, res, next) {
    const user = new Users(req.body.Email, req.body.Password);
    try {
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
    } catch (error) {
        next(error);
    }
}

function logout(req, res, next) {
    try {
        authUtil.DestroyUserSession(req, function() {
            res.redirect('/login');
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getSignup,
    getLogin,
    Signup,
    login,
    logout
};
