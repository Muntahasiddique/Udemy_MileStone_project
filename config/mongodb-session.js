const sessionmongodb = require('connect-mongodb-session');
const expresssession = require('express-session');


function sessionStore(){
   const Mongodbstore =sessionmongodb(expresssession);

  const StoreSession= new Mongodbstore ({
    uri : 'mongodb+srv://muntahamirza890:dbMuntahaPass@mydb.bcxy0.mongodb.net/',
    databaseName : 'online-shop',
    collection : 'sessions'
   })
   return StoreSession;
}
function sessionConfig(){
    return{
        secret : 'supersecret ',
        resave : false, // Don't resave unchanged sessions
        saveUninitialized : false, // Don't store empty sessions
        store : sessionStore(),
        cookie:{
            maxAge:2*24*60*60*1000
        }

    }
}
module.exports=sessionConfig;