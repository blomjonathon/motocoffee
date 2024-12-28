const mongoose = require('../db');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    stock: { type: Number, default: 0 },
    category: String,
    image: String,
});

module.exports = mongoose.model('Product', productSchema);
