import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Roles } from '../../types/roles';
import { AuthResponse } from '../../types/authResponse';
import { switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(userRole: Roles) {
    return this.httpClient
      .post<AuthResponse>(environment.SERVER_URL + `/login-${userRole}`, {})
      .pipe(
        take(1),
        switchMap((data) => {
          localStorage.setItem('token', data.token);
          return this.httpClient
            .get<AuthResponse>(environment.SERVER_URL + '/me', {
              headers: {
                authorization: `Bearer ${data.token}`,
              },
            })
            .pipe(take(1));
        })
      );
  }
}
