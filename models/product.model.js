const { ObjectId } = require("mongodb");
const db = require("../data/database");
class Product {
  constructor(productData) {
    this.title = productData.title;
    this.summary = productData.summary;
    this.price = +productData.price;
    this.description = productData.description;
    this.image = productData.image;
    // this.imagePath = `product-data/images/${productData.image}`;
    // this.imageUrl = `/products/assets/${productData.image}`;
    this.UpdateImageData();
    if (productData._id) {
      this.id = productData._id.toString();
    }
  }
  static async findById(productid) {
    let prodId;
    try {
      prodId = new ObjectId(productid);
    } catch (error) {
      error.code = 404;
      throw error;
    }
    const product = await db
      .getDb()
      .collection("products")
      .findOne({ _id: prodId });
    if (!product) {
      const error = new Error("Product not found");
      error.code = 404;
      throw error;
    }
    return new Product(product);
  }

  static async findAll() {
    const product = await db.getDb().collection("products").find().toArray();
    return product.map(function (productdocument) {
      return new Product(productdocument);
    });
  }
  UpdateImageData(){
    this.imagePath = `product-data/images/${this.image}`;
    this.imageUrl = `/products/assets/${this.image}`;
  }
  async save() {
    const productData = {
      title: this.title,
      summary: this.summary,
      price: this.price,
      description: this.description,
      image: this.image,
    };
    if (this.id) {
      const prodId = new ObjectId(this.id);
      //in case user do not want to update image
      if(!this.image){
        delete productData.image;//delete key value pair from object
      }
        await db
            .getDb()
            .collection("products")
            .updateOne({ _id: prodId }, { $set: productData });
    }
    else{
    db.getDb().collection("products").insertOne(productData);}
  }
  replceImage(newImage){
    this.image = newImage;
    this.UpdateImageData();
    //replce old image with new image
   
  }
}
module.exports = Product;
