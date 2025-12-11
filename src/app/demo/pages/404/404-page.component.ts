import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-404-page',
  imports: [SharedModule, NgbAlertModule],
  templateUrl: './404-page.component.html',
  styleUrls: ['./404-page.component.scss']
})
export class FailedComponent implements OnInit {
  ngOnInit() {
    console.log('ngOnInit');
  }

}
