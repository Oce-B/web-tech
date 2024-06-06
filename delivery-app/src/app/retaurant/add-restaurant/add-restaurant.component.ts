import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  standalone: true,
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class AddRestaurantComponent implements OnInit {
  addRestaurantForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddRestaurantComponent>,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.addRestaurantForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  submitForm(): void {
    if (this.addRestaurantForm.valid) {
      const newRestaurant: Restaurant = this.addRestaurantForm.value;
      this.restaurantService.createRestaurant(newRestaurant).subscribe(
        (result) => {
          console.log('Restaurant added successfully:', result);
          this.dialogRef.close(result);
          window.location.reload();
        },
        (error) => {
          console.error('Error adding restaurant:', error);
        }
      );
    }
  }
}
