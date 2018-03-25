import { Restaurant } from '../models/restaurant.model';
import { IRestaurantsService } from './restaurants.service.int';
import { IRandomNumberService } from './random-number.service.int';

export class RestaurantsService implements IRestaurantsService {

  constructor(
    private _restaurants: Restaurant[],
    private _randomNumberService: IRandomNumberService
  ) { }

  public getRestaurant(): Restaurant {
    const idx = this._randomNumberService.getRandomInteger(0, this._restaurants.length - 1);
    return this._restaurants[idx];
  }
}
