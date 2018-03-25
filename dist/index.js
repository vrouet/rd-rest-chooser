"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_service_1 = require("./services/restaurants.service");
const random_number_service_1 = require("./services/random-number.service");
const slack_publisher_service_1 = require("./services/slack-publisher.service");
const slackPublisher = new slack_publisher_service_1.SlackPublisherService(process.env.SLACK_BOT_TOKEN || '');
const service = new restaurants_service_1.RestaurantsService([{
        name: 'L\'Oasis',
        address: 'C/ Consell de Cent, algo'
    }, {
        name: 'El Gat Blau',
        address: 'Somewhere'
    }, {
        name: 'Yatai',
        address: 'Somewhere else'
    }], new random_number_service_1.RandomNumberService());
const restaurant = service.getRandomRestaurant();
console.log(`Chose ${restaurant.name} (${restaurant.address})`);
slackPublisher.publishMessage('D9VKND3DH', `El restaurante seleccionado para este miércoles es *${restaurant.name} (${restaurant.address})*`);
//# sourceMappingURL=index.js.map