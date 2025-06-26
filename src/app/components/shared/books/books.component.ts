import { Component, Input } from '@angular/core';
import { Book } from '../../../../types/Book';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-books',
  imports: [BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  @Input({ required: true }) books!: Book[];
}
