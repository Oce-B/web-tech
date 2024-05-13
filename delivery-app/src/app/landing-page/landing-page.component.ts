import { Component } from '@angular/core';
import { RestaurantListComponent } from '../retaurant/restaurant-list/restaurant-list.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RestaurantListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
