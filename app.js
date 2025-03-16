const express = require('express');
const path = require('path');
const ExpressSession = require('express-session')
const csurf = require('csurf');
const createSessionConfig = require('./config/mongodb-session')
const addcsurfmiddleware = require('./middlewares/csurf-token')
const Errormiddleware = require('./middlewares/error-handlingmiddleware')
const db = require('./data/database')
const authroutes = require('./routes/auth.routes');
const errorhandling = require('./middlewares/error-handlingmiddleware');
//const { error } = require('console');
//const { url } = require('inspector');


const app = express();

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
const sessionConfig = createSessionConfig();
app.use(ExpressSession(sessionConfig))

app.use(csurf());
app.use(addcsurfmiddleware)
app.use(Errormiddleware())
app.use( authroutes);
db.connectToDatabase().then(function(){
    app.listen(3000);
} ).catch(  function(error){
    console.log('Failed to Connect');
    console.log(error)
} ); 
