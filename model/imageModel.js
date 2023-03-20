const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  clickTime: { type: Date, required: true },
  image: { type: String, required: true },
});

const imageModel = mongoose.model('image', imageSchema);
module.exports = imageModel;