import { Restaurant } from '../models';

export interface IRestaurantsService {
  getRestaurants(): Restaurant[];
  setRestaurants(restaurants: Restaurant[]): void;
  getRandomRestaurant(): Restaurant;
}

export const RestaurantsServiceType = Symbol.for('IRestaurantsService');
