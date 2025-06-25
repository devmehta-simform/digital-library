import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Book } from '../../types/Book';
import { take } from 'rxjs';

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

  create(book: { author: string; availability: boolean; title: string }) {
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
      .pipe(take(1));
  }
}
