import { Component } from '@angular/core';
import { RestaurantListComponent } from '../retaurant/restaurant-list/restaurant-list.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RestaurantListComponent, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  navigateToRestaurants(): void {
    this.router.navigate(['/restaurants']);
  }
}
