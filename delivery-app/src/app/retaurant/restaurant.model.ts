import { Dish } from './restaurant-dish/dish.model';

export class Restaurant {
  name: string;
  type: string[];
  description: string;
  address: string;
  rating: number;
  dishes: Dish[];
  photos: string[];

  constructor(
    name: string,
    type: string[],
    description: string,
    address: string,
    rating: number,
    dishes: Dish[],
    photos: string[],
  ) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.address = address;
    this.rating = rating;
    this.dishes = dishes;
    this.photos = photos;
  }
}
