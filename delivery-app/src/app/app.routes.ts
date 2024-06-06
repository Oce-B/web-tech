import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {RestaurantListComponent} from "./retaurant/restaurant-list/restaurant-list.component";
import {DishListComponent} from "./retaurant/dish-list/dish-list.component";
import {DishViewComponent} from "./retaurant/dish-view/dish-view.component";
import {CartComponent} from "./cart/cart.component";


export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'restaurants/:id/dishes', component: DishListComponent },
  { path: 'restaurants/:id/dishes/:dishId', component: DishViewComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
