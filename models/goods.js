var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "productId":String,
    "productName":String,
    "productPrice":Number,
    "productNum":Number,
    "checked":String,
    "prodcutImg":String
});
module.exports = mongoose.model('Good',productSchema);