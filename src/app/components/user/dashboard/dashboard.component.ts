import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../../types/Book';
import { BookService } from '../../../services/book.service';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  books$!: Observable<Book[]>;
  searchQuery: string = '';
  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getAllBooks();
  }
  getSearchResults() {
    this.books$ = this.bookService.search(this.searchQuery);
  }
}
