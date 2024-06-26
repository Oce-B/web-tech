import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantRatingComponent } from './restaurant-rating.component';

describe('RestaurantRatingComponent', () => {
  let component: RestaurantRatingComponent;
  let fixture: ComponentFixture<RestaurantRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
