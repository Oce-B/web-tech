import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDishCardComponent } from './restaurant-dish-card.component';

describe('RestaurantDishCardComponent', () => {
  let component: RestaurantDishCardComponent;
  let fixture: ComponentFixture<RestaurantDishCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantDishCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantDishCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
