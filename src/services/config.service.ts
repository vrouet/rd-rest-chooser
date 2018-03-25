import { injectable } from 'inversify';
import 'reflect-metadata';

import { IConfigService } from './config.service.int';

@injectable()
export class ConfigService implements IConfigService {

  private _config: {[index: string]: any} = {};

  constructor() {
    this._config.slack_bot_token = process.env.SLACK_BOT_TOKEN;
  }

  public get(key: string): any {
    return this._config[key];
  }
}
