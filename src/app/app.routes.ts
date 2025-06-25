import { Routes } from '@angular/router';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { HomeComponent } from './components/librarian/home/home.component';
import { HomeComponent as ActualHomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: ActualHomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'librarian', component: HomeComponent },
];
