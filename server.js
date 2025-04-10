const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Berrie = require('./models/berrie.js');
const cors = require('cors');
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

app.get('/berries', async (req, res) => {
  const berries = await Berrie.find();
  res.json(berries);
});

app.post('/berries', async (req, res) => {
  const newBerrie = await Berrie.create(req.body);
});

app.get('/berrie', async (req, res) => {
  console.log("test")
  const foundBerries = await Berrie.find();
  res.json(foundBerries);
});

app.delete('/berries/:berrieId', async (req, res) => {
  console.log("test")
  const deletedBerrie = await Berrie.findByIdAndDelete(req.params.berrieId);
  res.json(deletedBerrie);
});

app.put('/berries/:berrieId', async (req, res) => {
  console.log("test")
  res.json({ message: `Update route with the param ${req.params.berrieId}` });
});
app.listen(3000, () => {
  console.log('The express app is ready!');
});
