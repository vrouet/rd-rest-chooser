import { RestaurantType } from './models/restaurant.model';
import { RestaurantsService } from './services/restaurants.service';
import { RandomNumberService } from './services/random-number.service';

const service = new RestaurantsService([{
  name: 'L\'Oasis',
  address: 'C/ Consell de Cent, algo',
  type: RestaurantType.Fusion
}, {
  name: 'El Gat Blau',
  address: 'Somewhere',
  type: RestaurantType.Catalan
}, {
  name: 'Yatai',
  address: 'Somewhere else',
  type: RestaurantType.Japanese
}], new RandomNumberService());
const restaurant = service.getRandomRestaurant();
console.log(`Chose ${restaurant.name} (${restaurant.address})`);
