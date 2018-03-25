import 'mocha';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

import { RandomNumberService } from './random-number.service';

chai.should();
chai.use(sinonChai);


describe('RandomNumberService', () => {

  let serviceInstance: RandomNumberService;

  beforeEach(() => {
    serviceInstance = new RandomNumberService();
  });

  describe('getRandomInteger', () => {

    it('always returns an integer between the provided min and max values', () => {
      for (let i = 0; i < 50; i++) {
        const randNb = serviceInstance.getRandomInteger(0, 5);
        randNb.should.be.within(0, 5);
      }
    });

  });

});
