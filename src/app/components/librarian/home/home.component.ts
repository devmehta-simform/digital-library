import { Component } from '@angular/core';
import { BooksComponent } from '../../books/books.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [BooksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
}
