import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Restaurant } from './restaurant.model';
import {Dish} from "./dish.model";

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

 createRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(`${this.apiUrl}/restaurants`, restaurant);
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiUrl}restaurants`);
  }

  getRestaurant(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.apiUrl}restaurants/${id}`);
  }

  getDishesByRestaurantId(id: string): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.apiUrl}restaurants/${id}/dishes`);
  }

  updateRestaurant(id: string, restaurant: Restaurant): Observable<any> {
    return this.http.put(`${this.apiUrl}restaurants/${id}`, restaurant);
  }

  deleteRestaurant(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}restaurants/${id}`);
  }

}
