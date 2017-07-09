//http://mongoosejs.com/docs/guide.html
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
    description:  String,
    price: Number,
    count: Number

});
module.exports=productSchema;