import { Component, Input } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { Dish } from '../dish.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dish-card',
  standalone: true,
  imports: [
    MatCard
  ],
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent {
  @Input() dish!: Dish;
  @Input() restaurantId!: string;


  constructor(private router: Router) {}

  navigateToDishView(): void {
    this.router.navigate(['/restaurants', this.restaurantId, 'dishes', this.dish.id]);
  }
}
