import 'mocha';
import * as chai from 'chai';

import { RestaurantsService } from './restaurants.service';
import { IRandomNumberService } from './random-number.service.int';

chai.should();

class RandomNumberServiceStub implements IRandomNumberService {
  getRandomInteger(): number {
    return 1;
  }
}

describe('RestaurantsService', () => {

  let serviceInstance: RestaurantsService;

  beforeEach(() => {
    const randomNumberService = new RandomNumberServiceStub();
    serviceInstance = new RestaurantsService([], randomNumberService);
  });

  describe('getRestaurant()', () => {

    it('returns an object', () => {
      const restaurant = serviceInstance.getRestaurant();

      restaurant.should.be.an('Object');
    });

  });

});
