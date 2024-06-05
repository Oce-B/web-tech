import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from './dish.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private apiUrl = `${environment.apiUrl}/restaurants`;

  constructor(private http: HttpClient) {}

  getDishesByRestaurant(restaurantId: number): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.apiUrl}/${restaurantId}/dishes`);
  }

  createDish(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>(`${this.apiUrl}/${dish.restaurantId}/dishes`, dish);
  }
}
