import { Restaurant } from '../models/restaurant.model';

export interface IRestaurantsService {
  getRestaurant(): Restaurant;
}
