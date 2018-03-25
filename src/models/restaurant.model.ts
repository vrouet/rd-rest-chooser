export enum RestaurantType {
  Catalan,
  Fusion,
  Italian,
  Japanese,
  Thai
}

export interface Restaurant {
  name: string;
  address: string;
  type: RestaurantType;
}
