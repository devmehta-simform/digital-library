import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../../types/Book';
import { BookService } from '../../../services/book.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  books$!: Observable<Book[]>;

  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getAllBooks();
  }
}
