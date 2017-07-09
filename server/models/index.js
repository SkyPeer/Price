let mongoose = require('./db');
let productSchema = require('./product');
module.exports = {
    Product: mongoose.model('Product', productSchema)
};