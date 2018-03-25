import { RestaurantsService } from './services/restaurants.service';
import { RandomNumberService } from './services/random-number.service';
import { SlackPublisherService } from './services/slack-publisher.service';

const slackPublisher = new SlackPublisherService(process.env.SLACK_BOT_TOKEN || '');

const service = new RestaurantsService([{
  name: 'L\'Oasis',
  address: 'C/ Consell de Cent, algo'
}, {
  name: 'El Gat Blau',
  address: 'Somewhere'
}, {
  name: 'Yatai',
  address: 'Somewhere else'
}], new RandomNumberService());
const restaurant = service.getRandomRestaurant();

console.log(`Chose ${restaurant.name} (${restaurant.address})`);
slackPublisher.publishMessage('D9VKND3DH', `El restaurante seleccionado para este miércoles es *${restaurant.name} (${restaurant.address})*`);
