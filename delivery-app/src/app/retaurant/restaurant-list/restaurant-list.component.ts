import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantService } from '../restaurant.service';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule, RestaurantCardComponent],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  @Output() restaurantSelected = new EventEmitter<string>();
  restaurants: Restaurant[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;
      console.log(this.restaurants[0]);
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
