import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { Restaurant } from '../restaurant.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RestaurantCardComponent],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss',
})
export class RestaurantListComponent {
  restaurants: Restaurant[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getallRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;
      console.log(this.restaurants[0]);
    });
  }

  getallRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`http://localhost:8080/restaurants`);
  }
}
