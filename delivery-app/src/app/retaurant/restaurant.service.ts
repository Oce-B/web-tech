import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = './restaurants.json';

  constructor(private http: HttpClient) {}

  createRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http
      .post<Restaurant>(`${this.apiUrl}/restaurants`, restaurant)
      .pipe(catchError(this.handleError<Restaurant>('createRestaurant')));
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get<Restaurant[]>(`${this.apiUrl}/restaurants`)
      .pipe(catchError(this.handleError<Restaurant[]>('getRestaurants', [])));
  }

  getRestaurant(id: string): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(`${this.apiUrl}/restaurants/${id}`)
      .pipe(catchError(this.handleError<Restaurant>('getRestaurant')));
  }

  updateRestaurant(id: string, restaurant: Restaurant): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/restaurants/${id}`, restaurant)
      .pipe(catchError(this.handleError<any>('updateRestaurant')));
  }

  deleteRestaurant(id: string): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/restaurants/${id}`)
      .pipe(catchError(this.handleError<any>('deleteRestaurant')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
