import { Component } from '@angular/core';
import { BooksComponent } from '../../shared/books/books.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Book } from '../../../../types/Book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-librarian-dashboard',
  imports: [BooksComponent, AsyncPipe],
  templateUrl: './librarian-dashboard.component.html',
  styleUrl: './librarian-dashboard.component.scss',
})
export class LibrarianDashboardComponent {
  books$: Observable<Book[]>;
  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getAllBooks();
  }
}
