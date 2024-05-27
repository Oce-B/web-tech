import { Component, Input } from '@angular/core';
import { RestaurantRatingComponent } from '../restaurant-rating/restaurant-rating.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Restaurant } from '../restaurant.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RestaurantRatingComponent],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss',
})
export class RestaurantCardComponent {
  @Input() restaurant!: Restaurant;

  constructor(private router: Router) {}

  viewDishes() {
    this.router.navigate([`/restaurants/${this.restaurant.id}/dishes`]);
  }
}
