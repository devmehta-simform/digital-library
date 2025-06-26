import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookCreateDTO } from '../../../types/bookCreateDTO';

@Component({
  selector: 'app-add-book-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.scss',
})
export class AddBookFormComponent {
  @Output() create = new EventEmitter<BookCreateDTO>();
  bookForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    availability: new FormControl(true, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    author: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor() {}

  submit() {
    // console.log(this.bookForm.invalid);
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
    } else {
      this.create.emit(this.bookForm.getRawValue());
      this.bookForm.reset();
    }
  }
}
