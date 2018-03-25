"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_model_1 = require("./models/restaurant.model");
const restaurants_service_1 = require("./services/restaurants.service");
const random_number_service_1 = require("./services/random-number.service");
const service = new restaurants_service_1.RestaurantsService([{
        name: 'L\'Oasis',
        address: 'C/ Consell de Cent, algo',
        type: restaurant_model_1.RestaurantType.Fusion
    }, {
        name: 'El Gat Blau',
        address: 'Somewhere',
        type: restaurant_model_1.RestaurantType.Catalan
    }, {
        name: 'Yatai',
        address: 'Somewhere else',
        type: restaurant_model_1.RestaurantType.Japanese
    }], new random_number_service_1.RandomNumberService());
const restaurant = service.getRandomRestaurant();
console.log(`Chose ${restaurant.name} (${restaurant.address})`);
//# sourceMappingURL=index.js.map