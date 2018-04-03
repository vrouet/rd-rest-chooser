import 'mocha';
import 'reflect-metadata';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import { RestaurantsController } from './restaurants.controller';
import { Restaurant } from '../models';
import { IRestaurantsService } from '../services/restaurants.service.int';

chai.should();
chai.use(sinonChai);


class RestaurantsServiceStub implements IRestaurantsService {

  public getRestaurants(): Restaurant[] {
    return [];
  }

  public setRestaurants(restaurants: Restaurant[]): void { }

  public getRandomRestaurant(): Restaurant {
    return {
      name: 'foo',
      address: 'bar'
    };
  }
}

describe('RestaurantsController', () => {

  let restaurantsService: RestaurantsServiceStub;
  let controllerInstance: RestaurantsController;

  beforeEach(() => {
    restaurantsService = new RestaurantsServiceStub();
    controllerInstance = new RestaurantsController(restaurantsService);
  });

  describe('getRestaurants() AKA GET /', () => {

    it('gets all available restaurants from its RestaurantsService', () => {
      restaurantsService.getRestaurants = sinon.stub().returns([]);

      controllerInstance.getRestaurants(mockReq(), mockRes());

      restaurantsService.getRestaurants.should.have.been.calledOnce;
    });

    it('calls response.jsonp() with the Array of restaurants', () => {
      const restaurants = [{
        name: 'foo',
        address: 'bar'
      }, {
        name: 'another',
        address: 'restaurant'
      }];
      restaurantsService.getRestaurants = sinon.stub().returns(restaurants);
      const response = mockRes()

      controllerInstance.getRestaurants(mockReq(), response);

      response.jsonp.should.have.been.calledOnce;
      response.jsonp.should.have.been.calledWith(restaurants);
    });

  });

});
