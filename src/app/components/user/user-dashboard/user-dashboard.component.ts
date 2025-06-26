import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../../types/Book';
import { BookService } from '../../../services/book.service';
import { BooksComponent } from '../../shared/books/books.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  imports: [BooksComponent, AsyncPipe],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss',
})
export class UserDashboardComponent {
  books$: Observable<Book[]>;
  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getAllBooks();
  }
}
