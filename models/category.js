const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: String,
    // Add other category properties
});

module.exports = mongoose.model('Categories', CategorySchema);
