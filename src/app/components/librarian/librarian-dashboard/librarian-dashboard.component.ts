import { Component } from '@angular/core';
import { BooksComponent } from '../../shared/books/books.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Book } from '../../../../types/Book';
import { BookService } from '../../../services/book.service';
import { AuthService } from '../../../services/auth.service';
import { AddBookFormComponent } from '../../add-book-form/add-book-form.component';
import { BookCreateDTO } from '../../../../types/bookCreateDTO';

@Component({
  selector: 'app-librarian-dashboard',
  imports: [BooksComponent, AsyncPipe, AddBookFormComponent],
  templateUrl: './librarian-dashboard.component.html',
  styleUrl: './librarian-dashboard.component.scss',
})
export class LibrarianDashboardComponent {
  books$: Observable<Book[]>;
  bookAdd = false;

  constructor(
    private bookService: BookService,
    private authService: AuthService
  ) {
    this.books$ = this.bookService.getAllBooks();
  }

  handleBookCreation(data: BookCreateDTO) {
    this.books$ = this.bookService.create(data);
  }

  logout() {
    this.authService.logout();
  }
}
