import { Component } from '@angular/core';
import { BehaviorSubject, debounceTime, mergeMap, Observable } from 'rxjs';
import { Book } from '../../../../types/Book';
import { BookService } from '../../../services/book.service';
import { BooksComponent } from '../../shared/books/books.component';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  imports: [BooksComponent, AsyncPipe],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss',
})
export class UserDashboardComponent {
  books$: Observable<Book[]>;
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private bookService: BookService,
    private authService: AuthService
  ) {
    this.books$ = this.bookService.getAllBooks();
    this.books$ = this.search$.pipe(
      debounceTime(500),
      mergeMap((searchQuery) => {
        return this.bookService.search(searchQuery);
      })
    );
  }

  search(event: Event) {
    const el = event.target;
    if (el instanceof HTMLInputElement) this.search$.next(el.value);
  }

  logout() {
    this.authService.logout();
  }
}
