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
    this.loadRestaurants();
    console.log(this.restaurants);
  }

  loadRestaurants(): void {
    this.http
      .get<Restaurant[]>('assets/restaurants.json')
      .subscribe((data: Restaurant[]) => {
        this.restaurants = data.map(
          (restaurantData) =>
            new Restaurant(
              restaurantData.name,
              restaurantData.type,
              restaurantData.description,
              restaurantData.address,
              restaurantData.rating,
              restaurantData.dishes,
              restaurantData.photos,
            ),
        );
      });
  }
}
