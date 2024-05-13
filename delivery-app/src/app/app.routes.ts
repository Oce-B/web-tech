import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RestaurantListComponent } from './retaurant/restaurant-list/restaurant-list.component';

export const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent },
  { path: '**', component: LandingPageComponent },
];
