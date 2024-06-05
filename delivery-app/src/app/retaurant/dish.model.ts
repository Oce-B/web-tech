export class Dish {
  id: number;
  name: string;
  price: number;
  description: string;
  photos: string[];
  restaurantId: number;

  constructor(
    id: number,
    name: string,
    price: number,
    description: string,
    photos: string[],
    restaurantId: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.photos = photos;
    this.restaurantId = restaurantId;
  }
}
