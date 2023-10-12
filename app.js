// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize express app
const app = express();

// Use cors middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/MarketPlace', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('{"message": "Welcome to DressStore Application."}');
});

// Listen on port 5000
app.listen(5000, () => console.log('Server started on port 5000'));



const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String
}));

// c. Write the controller.
const productController = {
  create: async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
  },
  read: async (req, res) => {
    const products = await Product.find();
    res.send(products);
  },
  update: async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send(product);
  },
  delete: async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.send({ message: 'Product deleted' });
  }
};

// d. Define the routes for handling all CRUD operations.
app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.read);
app.put('/products/:id', productController.update);
app.delete('/products/:id', productController.delete);
