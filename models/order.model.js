const db = require('../data/database');
class Order{
    constructor(cart , userData, status = 'pending' , date , orderId){
       this.productData = cart;
         this.userData = userData;
            this.status = status;
            this.date = new Date(date);
            if(this.date){
                this.formattedDate = this.date.toDateString('en-US' , {year: 'numeric' , month: 'long' , day: 'numeric'});
            }
            this.id= orderId;

       
    }
    save(){
        if(this.id){

        }
    
else{
    const orderDocument = {
 useData : this.userData,
 productData:this.productData,
 date: new Date(),
    status: this.status,
};
return db.getDb()
.collection('orders').insertOne(orderDocument)
    }
}}

module.exports = Order;