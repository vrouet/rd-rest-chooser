import { injectable, inject } from 'inversify';
import 'reflect-metadata';

import { Restaurant } from '../models';
import { IRestaurantsService } from './restaurants.service.int';
import { IRandomNumberService, RandomNumberServiceType } from './random-number.service.int';

@injectable()
export class RestaurantsService implements IRestaurantsService {

  private _restaurants: Restaurant[] = [];

  constructor(
    @inject(RandomNumberServiceType) private _randomNumberService: IRandomNumberService
  ) { }

  public getRestaurants(): Restaurant[] {
    return this._restaurants;
  }

  public setRestaurants(restaurants: Restaurant[]): void {
    this._restaurants = restaurants;
  }

  public getRandomRestaurant(): Restaurant {
    const idx = this._randomNumberService.getRandomInteger(0, this._restaurants.length - 1);
    return this._restaurants[idx];
  }

}
