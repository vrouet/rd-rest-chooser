import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';

import { IRestaurantsService, RestaurantsServiceType } from '../services/restaurants.service.int';

@controller('/restaurants')
export class RestaurantsController {

  constructor(
    @inject(RestaurantsServiceType) private _restaurantsService: IRestaurantsService
  ) { }

  @httpGet('')
  public getRestaurants(request: Request, response: Response): void {
    const restaurants = this._restaurantsService.getRestaurants();
    response.jsonp(restaurants);
  }

  @httpGet('/random')
  public getRandomRestaurant(request: Request, response: Response): void {
    const restaurant = this._restaurantsService.getRandomRestaurant();
    response.jsonp(restaurant);
  }

}
