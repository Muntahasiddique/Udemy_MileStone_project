class Order{
    constructor(cart , userData, status = 'pending' , date , orderId){
       this.productData = cart;
         this.userData = userData;
            this.status = status;
            this.date = new Date(date);
            if(this.date){
                this.formattedDate = this.date.toDateString('en-US');
            }
            this.id= orderId;

       
    }
}
module.exports = Order;