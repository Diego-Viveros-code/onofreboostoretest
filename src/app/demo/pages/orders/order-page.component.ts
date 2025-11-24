import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
	type: string;
	message: string;
}

// const ALERTS: Alert[] = [
// 	{
// 		type: 'success',
// 		message: 'This is an success alert',
// 	},
// 	{
// 		type: 'info',
// 		message: 'This is an info alert',
// 	},
// 	{
// 		type: 'warning',
// 		message: 'This is a warning alert',
// 	},
// 	{
// 		type: 'danger',
// 		message: 'This is a danger alert',
// 	},
// 	{
// 		type: 'primary',
// 		message: 'This is a primary alert',
// 	},
// 	{
// 		type: 'secondary',
// 		message: 'This is a secondary alert',
// 	},
// 	{
// 		type: 'light',
// 		message: 'This is a light alert',
// 	},
// 	{
// 		type: 'dark',
// 		message: 'This is a dark alert',
// 	},
// ];


@Component({
  selector: 'app-order-page',
  imports: [SharedModule, NgbAlertModule],
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class SamplePageComponent {

  alerts: Alert[];

	constructor() {
		//this.reset();
	}

	// close(alert: Alert) {
	// 	this.alerts.splice(this.alerts.indexOf(alert), 1);
	// }

	// reset() {
	// 	this.alerts = Array.from(ALERTS);
	// }
  
  tables = [
    {
      src: '../../../assets/images/user/avatar-1.jpg',
      name: 'Isabella Christensen',
      description: 'Requested account activation',
      price: '25.000',
      stock: '25.000',
      time: '11 MAY 12:56',
      color: 'text-c-green'
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      name: 'Ida Jorgensen',
      description: 'Pending document verification',
      price: '25.000',
      stock: '25.000',
      time: '11 MAY 10:35',
      color: 'text-c-green'
    },
    {
      src: 'assets/images/user/avatar-3.jpg',
      name: 'Mathilda Andersen',
      description: 'Completed profile setup',
      price: '25.000',
      stock: '25.000',
      time: '9 MAY 17:38',
      color: 'text-c-green'
    },
    {
      src: 'assets/images/user/avatar-1.jpg',
      name: 'Karla Soreness',
      description: 'Requires additional information',
      price: '25.000',
      stock: '25.000',
      time: '19 MAY 12:56',
      color: 'text-c-green'
    },
    {
      src: 'assets/images/user/avatar-2.jpg',
      name: 'Albert Andersen',
      description: 'Approved and verified account',
      price: '25.000',
      stock: '25.000',
      time: '21 July 12:56',
      color: 'text-c-green'
    }
  ];
}
