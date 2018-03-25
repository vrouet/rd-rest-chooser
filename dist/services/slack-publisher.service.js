"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@slack/client");
class SlackPublisherService {
    constructor(token) {
        this._slackClient = new client_1.WebClient(token);
    }
    publishMessage(target, message) {
        const slackMsg = { channel: target, text: message };
        this._slackClient.chat.postMessage(slackMsg)
            .then((res) => {
            console.log('Message sent: ', slackMsg);
        })
            .catch(console.error);
    }
}
exports.SlackPublisherService = SlackPublisherService;
//# sourceMappingURL=slack-publisher.service.js.map