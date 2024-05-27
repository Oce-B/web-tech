import { Component, Input } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { Dish } from '../dish.model';

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

  constructor() {}
}
