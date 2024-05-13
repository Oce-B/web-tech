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
  }

  loadRestaurants(): void {
    this.http
      .get('http://localhost:8080/restaurants')
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
