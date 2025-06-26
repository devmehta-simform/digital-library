import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { LibrarianDashboardComponent } from './components/librarian/librarian-dashboard/librarian-dashboard.component';
import { authGuard } from './guards/auth.guard';
import { Roles } from '../types/roles';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [authGuard],
    data: { role: Roles.USER },
  },
  {
    path: 'librarian',
    component: LibrarianDashboardComponent,
    canActivate: [authGuard],
    data: { role: Roles.LIBRARIAN },
  },
];
