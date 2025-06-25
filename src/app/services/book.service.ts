import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Book } from '../../types/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  getAllBooks() {
    return this.httpClient.get<Book[]>(environment.SERVER_URL + '/books', {
      headers: {
        authorization: localStorage.getItem('token')!,
      },
    });
  }
  search(searchQuery: string) {
    return this.httpClient.get<Book[]>(
      environment.SERVER_URL + `/books?title_like=${searchQuery}`,
      {
        headers: {
          authorization: localStorage.getItem('token')!,
        },
      }
    );
  }
}
