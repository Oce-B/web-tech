import {Component, Inject, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Dish } from '../dish.model';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-add-dish',
  standalone: true,
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss'],
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
export class AddDishComponent implements OnInit {
  addDishForm!: FormGroup;
  restaurantId!: number;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddDishComponent>,
    private dishService: DishService,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {
    this.restaurantId = data.restaurantId;
  }

  ngOnInit(): void {
    this.addDishForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.addDishForm.valid) {
      const newDish: Dish = this.addDishForm.value;
      newDish.restaurantId = this.restaurantId;
      this.dishService.createDish(newDish).subscribe(
        (result) => {
          console.log('Dish added successfully:', result);
          this.dialogRef.close(result);
        },
        (error) => {
          console.error('Error adding dish:', error);
         // console.log('RESTAURTANT ID:', this.restaurantId);
        }
      );
    }
  }
}
