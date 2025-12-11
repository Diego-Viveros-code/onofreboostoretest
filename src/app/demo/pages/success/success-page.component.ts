import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  imports: [SharedModule, NgbAlertModule],
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessComponent implements OnInit, OnDestroy {
  public orderService = inject(OrderService);
  public router = inject(Router);

  countdown: number = 7; // empieza en 7 segundos
  private intervalId;

  ngOnInit() {
    console.log('ngOnInit');
    setTimeout(() => {
      this.router.navigate(['/']); // ajusta la ruta según tu proyecto
    }, 7000); // 5000 ms = 7 segundos

    // Inicia el contador
    this.intervalId = setInterval(() => {
      this.countdown--;

      if (this.countdown === 0) {
        clearInterval(this.intervalId);
        this.router.navigate(['/order-page']); // redirige a tus órdenes
      }
    }, 1000); // cada 1 segundo
  }

    ngOnDestroy(): void {
    // Limpiar el interval si el componente se destruye antes de tiempo
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
