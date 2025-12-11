import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-success-page',
  imports: [SharedModule, NgbAlertModule],
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessComponent implements OnInit {
  public orderService = inject(OrderService);

  ngOnInit() {
    console.log('ngOnInit');
  }

}
