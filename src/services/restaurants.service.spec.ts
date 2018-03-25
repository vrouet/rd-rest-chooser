import 'mocha';
import * as chai from 'chai';

import { RestaurantsService } from './restaurants.service';

chai.should();

describe('RestaurantsService', () => {

  let serviceInstance: RestaurantsService;

  beforeEach(() => {
    serviceInstance = new RestaurantsService();
  });

  describe('getRestaurant()', () => {

    it('returns an object', () => {
      const restaurant = serviceInstance.getRestaurant();

      restaurant.should.be.an('Object');
    });

  });

});
