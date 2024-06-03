import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { Restaurant } from '../restaurant.model';
import { AddRestaurantComponent } from '../add-restaurant/add-restaurant.component';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule, RestaurantCardComponent, MatDialogModule, HttpClientModule],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  @Output() restaurantSelected = new EventEmitter<string>();
  restaurants: Restaurant[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;
      console.log(this.restaurants[0]);
    });
  }

  openAddRestaurantForm(): void {
    this.dialog.open(AddRestaurantComponent, {
      width: '600px'
    });
  }

  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`http://localhost:8080/restaurants`);
  }

  selectRestaurant(restaurantId: string): void {
    this.restaurantSelected.emit(restaurantId);
  }

  trackByFn(index: number, item: Restaurant): number {
    return item.id;
  }
}
