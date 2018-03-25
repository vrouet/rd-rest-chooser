import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { WebClient } from  '@slack/client';

import { IPublisherService } from './publisher.service.int';
import { ConfigServiceType, IConfigService } from './config.service.int';

@injectable()
export class SlackPublisherService implements IPublisherService {

  private _slackClient: WebClient;

  constructor(
    @inject(ConfigServiceType) private _configService: IConfigService
  ) {
    this._slackClient = new WebClient(this._configService.get('slack_bot_token'));
  }

  public publishMessage(target: string, message: string): void {
    const slackMsg = { channel: target, text: message };
    this._slackClient.chat.postMessage(slackMsg)
      .then((res) => {
        console.log('Message sent: ', slackMsg);
      })
      .catch(console.error);
  }

}
