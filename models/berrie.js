const mongoose = require('mongoose');

const berriesSchema = mongoose.Schema({
  name: String,
  price: Number,
  type: String,
});

const Berrie = mongoose.model('Berrie', berriesSchema);

module.exports = Berrie;
