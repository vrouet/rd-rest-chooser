import 'mocha';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

import { RestaurantsService } from './restaurants.service';
import { IRandomNumberService } from './random-number.service.int';

chai.should();
chai.use(sinonChai);


class RandomNumberServiceStub implements IRandomNumberService {
  public getRandomInteger(): number {
    return 0;
  }
}

describe('RestaurantsService', () => {

  const restaurants = [{
    name: 'L\'Oasis',
    address: 'C/ Consell de Cent, algo'
  }, {
    name: 'El Gat Blau',
    address: 'Somewhere'
  }, {
    name: 'Yatai',
    address: 'Somewhere else'
  }];

  let randomNumberService: RandomNumberServiceStub;
  let serviceInstance: RestaurantsService;

  beforeEach(() => {
    randomNumberService = new RandomNumberServiceStub();
    serviceInstance = new RestaurantsService(restaurants, randomNumberService);
  });

  describe('getRandomRestaurant()', () => {

    it('returns an object', () => {
      const restaurant = serviceInstance.getRandomRestaurant();

      restaurant.should.be.an('Object');
    });

    it('calls RandomNumberService::getRandomInteger() with the right arguments', () => {
      randomNumberService.getRandomInteger = sinon.stub().returns(0);

      serviceInstance.getRandomRestaurant();

      randomNumberService.getRandomInteger.should.have.been.calledOnce;
      randomNumberService.getRandomInteger.should.have.been.calledWith(0, restaurants.length - 1);
    });

    it('returns the restaurant at the randomly defined index', () => {
      randomNumberService.getRandomInteger = sinon.stub().returns(1);

      const restaurant = serviceInstance.getRandomRestaurant();

      restaurant.should.deep.equal(restaurants[1]);
    });

  });

});
