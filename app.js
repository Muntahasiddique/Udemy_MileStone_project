const express = require('express');
const path = require('path');
const db = require('./data/database')
const authroutes = require('./routes/auth.routes');
const { error } = require('console');

const app = express();

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
app.use(express.static('public'));
app.use(authroutes);
db.connectToDatabase().then(function(){
    app.listen(3000);
} ).catch(  function(error){
    console.log('Failed to Connect');
    console.log(error)
} ); 
