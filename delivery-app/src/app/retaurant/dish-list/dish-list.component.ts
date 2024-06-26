import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DishCardComponent } from '../dish-card/dish-card.component';
import { Dish } from '../dish.model';
import {AddRestaurantComponent} from "../add-restaurant/add-restaurant.component";
import {MatDialog} from "@angular/material/dialog";
import {AddDishComponent} from "../add-dish/add-dish.component";

@Component({
  selector: 'app-dish-list',
  standalone: true,
  imports: [CommonModule, DishCardComponent],
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss'],
})
export class DishListComponent implements OnInit {
  restaurantId!: string;
  restaurantName!: string;
  dishes: Dish[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private dialog: MatDialog) {}

  openAddDishForm(): void {
    this.dialog.open(AddDishComponent, {
      width: '600px',
      data: { restaurantId: this.restaurantId }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.fetchDishes();
      }
    });
  }


  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('id')!;
    this.getRestaurantDetails().subscribe(restaurant => {
      this.restaurantName = restaurant.name;
    });
    this.fetchDishes();
  }

  getRestaurantDetails(): Observable<any> {
    return this.http.get(`http://localhost:8080/restaurants/${this.restaurantId}`);
  }

  fetchDishes(): void {
    this.http.get<Dish[]>(`http://localhost:8080/restaurants/${this.restaurantId}/dishes`).subscribe(
      dishes => this.dishes = dishes,
      error => console.error('Failed to fetch dishes', error)
    );
  }
}
