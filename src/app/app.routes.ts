import { Routes } from '@angular/router';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { HomeComponent } from './components/librarian/home/home.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'librarian', component: HomeComponent },
];
