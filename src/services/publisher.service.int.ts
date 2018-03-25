export interface IPublisherService {
  publishMessage(target: string, message: string): void;
}

export const PublisherServiceType = Symbol.for('IPublisherService');
