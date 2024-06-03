export class Dish {
  id: number
  name: string;
  price: number;
  description: string;
  photos: string[];

  constructor(
    id: number,
    name: string,
    price: number,
    description: string,
    photos: string[],
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.photos = photos;
  }
}
