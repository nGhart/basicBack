const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  inventoryName: { type: String, required: true },
  inventoryNumber: { type: String, required: true },
  inventoryDate: { type: String, required: false },
  inventoryPrice: { type: Number, required: true },
  inventorySalePrice: { type: Number, required: false },
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
