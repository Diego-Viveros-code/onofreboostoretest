import { inject, Injectable } from '@angular/core';
import { Book } from '../book-list/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // se invoca a la url madre
  private apiUrl = environment.apiUrl;

  // se injecta el httpClient en variable http
  private clienteHttp = inject(HttpClient);

  constructor() {}

  // metodo asincrono de tipo array de libros
  getBooks(): Observable<Book[]> {
    return this.clienteHttp.get<Book[]>(this.apiUrl + 'query/method/join_books_category');
  }
}
