const bcrypt = require('bcryptjs');
const db = require('../data/database')
class Users{
    constructor(email , password , fullname , street ,postalCode ,city){
        this.email = email;
        this.password =  password;
        this.fullname=fullname;
        this.street =street;
        this.address={
            street:street,
            postalCode :postalCode,
            city :city
        }

    }
   async signup(){
        const hashedPassword = await bcrypt.hash(this.password , 12)
       await db.getDb().collection('users').insertOne({
            email:this.email,
          password: hashedPassword,
          name:this.fullname,
         address: this.address
        });
    }
}

module.exports= Users