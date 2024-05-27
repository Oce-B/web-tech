import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RestaurantListComponent } from './retaurant/restaurant-list/restaurant-list.component';
import {DishListComponent} from "./retaurant/dish-list/dish-list.component";
import {DishViewComponent} from "./retaurant/dish-view/dish-view.component";

export const routes: Routes = [
  { path: 'restaurants/:id/dishes/:dish_id', component: DishViewComponent },
  { path: 'restaurants/:id/dishes', component: DishListComponent },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: '**', component: LandingPageComponent },
];
