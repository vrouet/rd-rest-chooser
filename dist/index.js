"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const config_service_int_1 = require("./services/config.service.int");
const config_service_1 = require("./services/config.service");
const random_number_service_int_1 = require("./services/random-number.service.int");
const random_number_service_1 = require("./services/random-number.service");
const restaurants_service_int_1 = require("./services/restaurants.service.int");
const restaurants_service_1 = require("./services/restaurants.service");
const publisher_service_int_1 = require("./services/publisher.service.int");
const slack_publisher_service_1 = require("./services/slack-publisher.service");
const container = new inversify_1.Container();
container.bind(config_service_int_1.ConfigServiceType).to(config_service_1.ConfigService);
container.bind(random_number_service_int_1.RandomNumberServiceType).to(random_number_service_1.RandomNumberService);
container.bind(publisher_service_int_1.PublisherServiceType).to(slack_publisher_service_1.SlackPublisherService);
container.bind(restaurants_service_int_1.RestaurantsServiceType).to(restaurants_service_1.RestaurantsService);
const restaurants = [{
        name: 'L\'Oasis',
        address: 'C/ Consell de Cent, algo'
    }, {
        name: 'El Gat Blau',
        address: 'Somewhere'
    }, {
        name: 'Yatai',
        address: 'Somewhere else'
    }];
const restaurantsService = container.get(restaurants_service_int_1.RestaurantsServiceType);
restaurantsService.setRestaurants(restaurants);
const restaurant = restaurantsService.getRandomRestaurant();
console.log(`Chose ${restaurant.name} (${restaurant.address})`);
const publisher = container.get(publisher_service_int_1.PublisherServiceType);
publisher.publishMessage('D9VKND3DH', `El restaurante seleccionado para este miércoles es *${restaurant.name} (${restaurant.address})*`);
//# sourceMappingURL=index.js.map