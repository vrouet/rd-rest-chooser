import { Container } from 'inversify';

import { IRestaurantsService, RestaurantsServiceType } from './services/restaurants.service.int';
import { RestaurantsService } from './services/restaurants.service';
import { IRandomNumberService, RandomNumberServiceType } from './services/random-number.service.int';
import { RandomNumberService } from './services/random-number.service';
import { IPublisherService, PublisherServiceType } from './services/publisher.service.int';
import { SlackPublisherService } from './services/slack-publisher.service';

const container = new Container();

container.bind<IRandomNumberService>(RandomNumberServiceType).to(RandomNumberService);
container.bind<IPublisherService>(PublisherServiceType).toConstantValue(
  new SlackPublisherService(process.env.SLACK_BOT_TOKEN || '')
);
container.bind<IRestaurantsService>(RestaurantsServiceType).to(RestaurantsService);

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
const restaurantsService = container.get<IRestaurantsService>(RestaurantsServiceType);
restaurantsService.setRestaurants(restaurants);
const restaurant = restaurantsService.getRandomRestaurant();

console.log(`Chose ${restaurant.name} (${restaurant.address})`);
const publisher = container.get<IPublisherService>(PublisherServiceType);
publisher.publishMessage('D9VKND3DH', `El restaurante seleccionado para este miércoles es *${restaurant.name} (${restaurant.address})*`);
