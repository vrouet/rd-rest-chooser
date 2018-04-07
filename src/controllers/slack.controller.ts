import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import { WebClient } from '@slack/client';

import { IRestaurantsService, RestaurantsServiceType } from '../services/restaurants.service.int';
import { IPublisherService, PublisherServiceType } from '../services/publisher.service.int';

@controller('/slack')
export class SlackController {

  constructor(
    @inject(RestaurantsServiceType) private _restaurantsService: IRestaurantsService,
    @inject(PublisherServiceType) private _publisherService: IPublisherService
  ) { }

  @httpPost('/random')
  public getRestaurants(request: Request, response: Response): void {
    response.send('Estoy seleccionando el restaurante...');

    const restaurant = this._restaurantsService.getRandomRestaurant();
    const message = `El restaurante seleccionado para este miércoles es *${restaurant.name} (${restaurant.address})*`;
    this._publisherService.publishMessage(request.body.channel_id, message);
  }

}
