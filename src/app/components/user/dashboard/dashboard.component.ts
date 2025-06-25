import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from '../../books/books.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, BooksComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
}
