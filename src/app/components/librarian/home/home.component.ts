import { Component } from '@angular/core';
import { BooksComponent } from '../../books/books.component';
import { AuthService } from '../../../services/auth.service';
import { AddBookFormComponent } from '../../add-book-form/add-book-form.component';

@Component({
  selector: 'app-home',
  imports: [BooksComponent, AddBookFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  addBook = false;
  constructor(private authService: AuthService) {}

  handleCreation() {}

  logout() {
    this.authService.logout();
  }
}
