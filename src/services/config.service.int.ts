export interface IConfigService {
  get(key: string): any;
}

export const ConfigServiceType = Symbol.for('IConfigService');
