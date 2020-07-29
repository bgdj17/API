const express = require('express');
const routes = express.Router();
const RestaurantController = require('./route/RestaurantController');

routes.get('/restaurants', RestaurantController.findAll);
routes.get('/restaurant/name/:name', RestaurantController.findName);
routes.get('/restaurant/:id', RestaurantController.findId);
routes.get('/restaurants/cuisine/:cuisine', RestaurantController.findCuisine)
routes.post('/restaurant/', RestaurantController.createRestaurant)
routes.delete('/restaurant/:id', RestaurantController.deleteRestaurant)
// routes.delete('/restaurant', RestaurantController);
module.exports = routes;
