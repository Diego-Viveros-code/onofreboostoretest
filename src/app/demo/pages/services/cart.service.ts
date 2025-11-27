import { Injectable, inject } from '@angular/core';
import { Book } from '../book-list/book';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Book[] = [];

  // se invoca a la url madre
  private apiUrl = environment.apiUrl;

  // se injecta el httpClient en variable http
  private clienteHttp = inject(HttpClient);

  constructor() {}

  // obtiene todos los libros del carrito
  getCart(): Book[] {
    return this.cart;
  }

  // remueve liros del carrito
  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
  }

  // metodo para crear una orden de pago
  pay(payload: unknown) {
    return this.clienteHttp.post(this.apiUrl + 'order/create-order', payload);
  }

}
