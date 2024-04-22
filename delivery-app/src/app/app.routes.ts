import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '/' }, // Wildcard route for unknown URLs
];

export const routing = RouterModule.forRoot(appRoutes);
