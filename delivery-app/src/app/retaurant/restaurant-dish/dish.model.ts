export class Dish {
  name: string;
  price: number;
  description: string;
  photos: string[];

  constructor(
    name: string,
    price: number,
    description: string,
    photos: string[],
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.photos = photos;
  }
}
