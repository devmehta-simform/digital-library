import { Component } from '@angular/core';
import { Roles } from '../../../types/roles';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
