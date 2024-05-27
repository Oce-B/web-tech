import { Dish } from './dish.model';
import { restaurantType } from './restaurantType.model';

export class Restaurant {
  id: number;
  name: string;
  type: restaurantType;
  description: string;
  address: string;
  rating: number;
  photos: string[];
  dishes: Dish[];

  constructor(
    id: number,
    name: string,
    type: restaurantType,
    description: string,
    address: string,
    rating: number,
    photos: string[],
    dishes: Dish[],
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.description = description;
    this.address = address;
    this.rating = rating;
    this.dishes = dishes;
    this.photos = photos;
  }
}
