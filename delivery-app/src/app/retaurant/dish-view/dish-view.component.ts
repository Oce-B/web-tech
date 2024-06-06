import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../dish.model';
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {CartService} from "../../cart.service";

@Component({
  selector: 'app-dish-view',
  templateUrl: './dish-view.component.html',
  styleUrls: ['./dish-view.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class DishViewComponent implements OnInit {
  dishId!: string;
  dish!: Dish;
  orderForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.dishId = this.route.snapshot.paramMap.get('dishId')!;
    if (this.dishId) {
      this.fetchDishDetails();
    } else {
      console.error('Dish ID is null');
      this.router.navigate(['/']);
    }

    this.orderForm = this.fb.group({
      quantity: [1, [Validators.required, Validators.min(1)]],
      utensils: [false]
    });
  }

  fetchDishDetails(): void {
    this.http.get<Dish>(`http://localhost:8080/dishes/${this.dishId}`).subscribe({
      next: (dish) => this.dish = dish,
      error: (error) => {
        console.error('Failed to fetch dish details', error);
        this.router.navigate(['/']);
      }
    });
  }

  addToCart(): void {
    if (this.orderForm.valid) {
      const orderDetails = {
        dish: this.dish,
        ...this.orderForm.value
      };
      this.cartService.addToCart(orderDetails);
      console.log('Order Details:', orderDetails);
      this.router.navigate(['/cart']);
    }
  }
}
