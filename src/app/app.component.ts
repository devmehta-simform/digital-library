import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Roles } from '../types/roles';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'digital-library';

  constructor(private authService: AuthService, private router: Router) {}

  loginAsLibrarian() {
    this.authService.login(Roles.LIBRARIAN).subscribe((data) => {
      if (data.role === Roles.LIBRARIAN) {
        this.router.navigate(['librarian']);
      }
    });
  }

  loginAsUser() {
    this.authService.login(Roles.USER).subscribe((data) => {
      if (data.role === Roles.USER) {
        this.router.navigate(['dashboard']);
      }
    });
  }
}
