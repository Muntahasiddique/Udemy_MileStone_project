const express = require ('express');
const authcontroller = require('../controllers/auth.controller')
const router = express.Router();

router.get('/signup' , authcontroller.getSignup)
router.post('/signup' , authcontroller.Signup )
router.get('/login' , authcontroller.getLogin)
module.exports=router;