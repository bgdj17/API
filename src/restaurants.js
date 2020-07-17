const mongoose = require('mongoose');
const restauranteSchema = new mongoose.Schema({
    name: String,
    id: Number,
    borough: String,
    cuisine: String
});

const Restaurant = mongoose.model('Restaurant', restauranteSchema);

module.exports = Restaurant;