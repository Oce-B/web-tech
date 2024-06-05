import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { Dish } from '../dish.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dish-card',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent {
  @Input() dish!: Dish;
  @Input() restaurantId!: string;

  constructor(private router: Router) {}

  navigateToDishView(): void {
    if (this.restaurantId && this.dish.id) {
      this.router.navigate(['/restaurants', this.restaurantId, 'dishes', this.dish.id]);
    } else {
      console.error('Invalid restaurantId or dishId:', this.restaurantId, this.dish.id);
    }
  }
}
