const mongoose = require('mongoose');
const restauranteSchema = new mongoose.Schema({
    name: String,
    restaurant_id: String,
    borough: String,
    cuisine: String
});

const Restaurant = mongoose.model('Restaurant', restauranteSchema);

module.exports = Restaurant;