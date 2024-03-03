require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Item = require('./models/Item');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URL)

app.get('/', (req,res) => {
  res.send('Congrats!');
});


app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    console.log(items)
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/inc', async (req, res) => {
  
  const { itemId } = req.body;
  console.log(req.body.itemId)
  try {
    // Find the item by its ID
    const item = await Item.findById(itemId);
    
    // Increment the quantity by 1 (or you can decrement it as needed)
    item.quantity += 1;

    // Save the updated item to the database
    await item.save();

    // Send a response indicating success
    res.status(200).send('Item quantity updated successfully');
  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error updating item quantity:', error);
    res.status(500).send('Failed to update item quantity');
  }
});


app.post('/api/dec', async (req, res) => {
  const { itemId } = req.body;

  try {
    // Find the item by its ID
    const item = await Item.findById(itemId);
    
    // Decrement the quantity by 1 (ensuring it doesn't go below zero)
    item.quantity = Math.max(0, item.quantity - 1);

    // Save the updated item to the database
    await item.save();

    // Send a response indicating success
    res.status(200).send('Item quantity updated successfully');
  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error updating item quantity:', error);
    res.status(500).send('Failed to update item quantity');
  }
});

app.get('/api/cart', async (req, res) => {
  try {
    // Find items whose quantity is not equal to 0
    const cartItems = await Item.find({ quantity: { $ne: 0 } });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
});