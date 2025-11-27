import { Injectable, inject } from '@angular/core';
import { Book } from '../book-list/book';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Book[] = [];
  public storageKey = 'cart'; // key en localStorage

  // se invoca a la url madre
  private apiUrl = environment.apiUrl;

  // se injecta el httpClient en variable http
  private clienteHttp = inject(HttpClient);

  constructor() {}

  getCart(): Book[] {
    return this.cart;
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
  }

  pay(payload: unknown) {
    return this.clienteHttp.post(this.apiUrl + 'order/create-order', payload);
  }

  // loadCartFromStorage(): void {
  //   const savedCart = localStorage.getItem(this.storageKey);
  //   this.cart = savedCart ? JSON.parse(savedCart) : [];
  // }

  // addToCart(book: Book): void {
  //   this.cart.push({ ...book });
  //   this.saveCart();
  //   console.log("Libro agregado");
  //   console.log(this.cart);
  // }

  // clearCart(): void {
  //   this.cart = [];
  //   this.saveCart();
  // }

  // // método privado para guardar en localStorage
  // private saveCart(): void {
  //   localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
  // }

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // pay(payload: any): Observable<any> {
  //   return this.clienteHttp.post<any>('http://localhost:8000/api/create-order', payload);
  // }

  // pay(payload) {
  //   this.clienteHttp.post(this.apiUrl + 'order/create-order', payload).subscribe({
  //     next: (res) => console.log('Pedido enviado', res),
  //     error: (err) => console.error('Error enviando pedido', err)
  //   });
  // }

  // pay(payload: any) {
  //   return this.http.post('http://localhost:8000/api/create-order', payload);
  // }
}
