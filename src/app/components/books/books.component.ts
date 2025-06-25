import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../types/Book';
import { BookService } from '../../services/book.service';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  books$!: Observable<Book[]>;
  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getAllBooks();
  }
  getSearchResults(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.books$ = this.bookService.search(target.value);
    }
  }
}
