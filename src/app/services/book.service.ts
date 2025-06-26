import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Book } from '../../types/Book';
import { debounce, debounceTime, switchMap, take, tap } from 'rxjs';
import { BookCreateDTO } from '../../types/bookCreateDTO';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  getAllBooks() {
    return this.httpClient.get<Book[]>(environment.SERVER_URL + '/books', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')!}`,
      },
    });
  }
  search(searchQuery: string) {
    return this.httpClient.get<Book[]>(
      environment.SERVER_URL + `/books?title_like=${searchQuery}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')!}`,
        },
      }
    );
  }

  create(book: BookCreateDTO) {
    return this.httpClient
      .post(
        environment.SERVER_URL + `/books`,
        { ...book },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')!}`,
          },
        }
      )
      .pipe(
        take(1),
        switchMap(() => {
          return this.getAllBooks().pipe(take(1));
        })
      );
  }
}
