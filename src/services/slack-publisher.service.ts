import { injectable } from 'inversify';
import 'reflect-metadata';
import { WebClient } from  '@slack/client';

import { IPublisherService } from './publisher.service.int';

@injectable()
export class SlackPublisherService implements IPublisherService {

  private _slackClient: WebClient;

  constructor(token: string) {
    this._slackClient = new WebClient(token);
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
