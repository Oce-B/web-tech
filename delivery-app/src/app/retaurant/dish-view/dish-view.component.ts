import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../dish.model';
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

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
  utensilOptions: string[] = ['Fork', 'Spoon', 'Knife'];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
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
      extraUtensils: this.fb.array(this.utensilOptions.map(() => false))
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

  get extraUtensils(): FormArray {
    return this.orderForm.get('extraUtensils') as FormArray;
  }

  addToCart(): void {
    if (this.orderForm.valid) {
      const orderDetails = {
        dish: this.dish,
        quantity: this.orderForm.value.quantity,
        extraUtensils: this.utensilOptions.filter((_, i) => this.orderForm.value.extraUtensils[i])
      };
      console.log('Order Details:', orderDetails);
    }
  }
}
