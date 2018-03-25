import { Restaurant } from '../models/restaurant.model';

export interface IRestaurantsService {
  setRestaurants(restaurants: Restaurant[]): void;
  getRandomRestaurant(): Restaurant;
}

export const RestaurantsServiceType = Symbol.for('IRestaurantsService');
