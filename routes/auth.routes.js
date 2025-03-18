const express = require ('express');
const authcontroller = require('../controllers/auth.controller')
const router = express.Router();

router.get('/signup' , authcontroller.getSignup)
router.post('/signup' , authcontroller.Signup )
router.get('/login' , authcontroller.getLogin)
router.post('/login' , authcontroller.login)
router.post('/logout' , authcontroller.logout)
module.exports=router;