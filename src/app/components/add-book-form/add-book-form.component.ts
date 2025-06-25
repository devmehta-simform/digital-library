import { Component, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BookService } from '../../services/book.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-add-book-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.scss',
})
export class AddBookFormComponent {
  create = new EventEmitter<void>();
  bookForm = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    availability: new FormControl(true, { nonNullable: true }),
    author: new FormControl('', { nonNullable: true }),
  });

  constructor(private booksService: BookService) {}

  submit() {
    this.booksService.create(this.bookForm.getRawValue()).subscribe();
  }
}
