import { Restaurant, RestaurantType } from '../models/restaurant.model';
import { IRestaurantsService } from './restaurants.service.int';

export class RestaurantsService implements IRestaurantsService {
  private _restaurants: Restaurant[];

  constructor() {
    this._restaurants = [{
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
    }];
  }

  public getRestaurant(): Restaurant {
    return this._restaurants[0];
  }
}
