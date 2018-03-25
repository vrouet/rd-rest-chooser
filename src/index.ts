import { RestaurantsService } from './services/restaurants.service';
import { RandomNumberService } from './services/random-number.service';

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
