import { Food } from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_food: Food[] = [
  {
    id: '1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
    ingredients: ['dough', 'cheese', 'tomato sauce', 'pepperoni'],
    description: 'A classic Italian pizza with pepperoni and cheese.'
  },
  {
    id: '2',
    name: 'Meatball',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
    ingredients: ['ground beef', 'breadcrumbs', 'spices', 'tomato sauce'],
    description: 'Delicious meatballs with a savory tomato sauce.'
  },
  {
    id: '3',
    name: 'Hamburger',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    tags: ['FastFood', 'Hamburger'],
    ingredients: ['bun', 'beef patty', 'lettuce', 'tomato', 'cheese'],
    description: 'A classic hamburger with all the traditional toppings.'
  },
  {
    id: '4',
    name: 'Fried Potatoes',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/food-4.jpg',
    tags: ['FastFood', 'Fry'],
    ingredients: ['potatoes', 'oil', 'salt'],
    description: 'Crispy fried potatoes, perfect as a side dish or snack.'
  },
  {
    id: '5',
    name: 'Chicken Soup',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['SlowFood', 'Soup'],
    ingredients: ['chicken', 'vegetables', 'broth', 'spices'],
    description: 'A hearty and warm chicken soup with rich flavors.'
  },
  {
    id: '6',
    name: 'Vegetables Pizza',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
    ingredients: ['dough', 'cheese', 'tomato sauce', 'vegetables'],
    description: 'A delicious pizza topped with fresh vegetables.'
  },
];

export const sample_tags: Tag[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
];
