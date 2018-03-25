import { injectable } from 'inversify';
import 'reflect-metadata';

import { IRandomNumberService } from './random-number.service.int';

@injectable()
export class RandomNumberService implements IRandomNumberService {

  public getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
