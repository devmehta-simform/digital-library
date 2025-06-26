import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const routeData = route.data;
  return authService.getRole().pipe(
    map((role) => {
      if (role === routeData['role']) return true;
      else {
        router.navigate(['']);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['']);
      return of(false);
    })
  );
};
