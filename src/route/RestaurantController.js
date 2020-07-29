const Restaurant = require('../restaurants')
const express = require('express')
module.exports = {
    async findAll(request, response, next) {
        const limit = parseInt(request.query.limit);
        const page = parseInt(request.query.page);
        const skip = (page - 1) * limit;
        var resposta = await Restaurant.find().limit(limit).skip(skip)
        response.status(200).json(resposta);
       
    },
    async findName(request, response, next) {
        var name = request.params.name
        var resposta = await Restaurant.find({ name: name })
        retornoJson(response, resposta)
    },
    async findId(request, response, next) {
        var id= request.params.id
        var resposta = await Restaurant.findById(id)
        response.status(200).json(resposta)
    },
    async findCuisine(request, response) {
        const cuisine = request.params.cuisine
        var resposta = await Restaurant.find({ cuisine: cuisine });
        retornoJson(response, resposta)
    },
    async createRestaurant(request, response) {
        const restaurantBody = request.body
        const restaurant = new Restaurant(restaurantBody)
        console.log(restaurantBody)
        await restaurant.save()
            .then(() => {
                // if(restaurant.name!=undefined){
                //     restaurant.name = 
                // }
               return response.status(200).json(restaurant)
            })
            .catch((error) => {
               return response.status(500).json({ message: error.message })
            })
    },
    async deleteRestaurant(request, response){
        var id = request.params.id
         Restaurant.deleteOne({_id: id})
        .then((resp) => {
            if(resp != undefined||resp != null ){
                response.status(200).json({ message: "Deletado com sucesso"})
            }
            
        })
        .catch((error) => {
           return response.status(500).json({ message: error.message })
        })

    }
};
function retornoJson(response, resposta) {
    if (resposta.length > 0) {
        return response.status(200).json(resposta)
    }
    else {
        return response.status(404).json({ message: 'Restaurante não encontrado' })
    }
}

