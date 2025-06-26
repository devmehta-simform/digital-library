import { Component, Input } from '@angular/core';
import { Book } from '../../../../types/Book';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input({ required: true }) book!: Book;
}
