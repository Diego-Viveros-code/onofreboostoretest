import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../services/order.service';
import { Order } from './order';

@Component({
  selector: 'app-order-page',
  imports: [SharedModule, NgbAlertModule],
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderComponent implements OnInit {
  public orderService = inject(OrderService);
  orders: Order[] = [];

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe({
      next: (data) => {
        // data.orders es el array real
        this.orders = data['orders'].map((order) => ({
          order_id: order.order_id,
          user_id: order.user_id,
          total: order.total,
          status: order.status,
          transaction_id: order.transaction_id
        }));
      },
      error: (error) => {
        console.error('Error fetching orders', error);
      }
    });
  }

  // ✔ Función que llama al service checkPayment
  checkPayment(orderId: number) {
    this.orderService.checkPayment(orderId).subscribe({
      next: (res) => {
        console.log('Pago verificado:', res);
        // Actualizamos la lista de órdenes para reflejar el nuevo estado
        this.getOrders();
      },
      error: (err) => {
        console.error('Error verificando el pago', err);
      }
    });
  }
}
