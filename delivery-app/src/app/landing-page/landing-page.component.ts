import { Component } from '@angular/core';
import { RestaurantRatingComponent } from '../retaurant/restaurant-rating/restaurant-rating.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RestaurantRatingComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
