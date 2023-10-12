const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    // Add other product properties
});

module.exports = mongoose.model('Products', ProductSchema);
