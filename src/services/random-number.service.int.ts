export interface IRandomNumberService {
  getRandomInteger(min: number, max: number): number;
}

export const RandomNumberServiceType = Symbol.for('IRandomNumberService');
