import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Order } from '../orders/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public orders: Order[] = [];
  userId: number = 1;

  // se invoca a la url madre
  private apiUrl = environment.apiUrl;

  // se injecta el httpClient en variable http
  private clienteHttp = inject(HttpClient);

  constructor() {}

  getOrders(): Observable<Order[]> {
    return this.clienteHttp.get<Order[]>(this.apiUrl + 'order/user/' + this.userId);
  }

  checkPayment(orderId: number) {
    return this.clienteHttp.get(`${this.apiUrl}order/${orderId}/check-status`);
  }
}
