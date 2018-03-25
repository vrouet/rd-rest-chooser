import { RestaurantsService } from './services/restaurants.service';

const service = new RestaurantsService();
const restaurant = service.getRestaurant();
console.log(`Chose ${restaurant.name} (${restaurant.address})`);
