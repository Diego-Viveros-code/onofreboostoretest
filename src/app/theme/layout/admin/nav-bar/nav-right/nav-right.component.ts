// angular import
import { Component, inject } from '@angular/core';

// bootstrap import
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// router
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-right',
  imports: [SharedModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent {
  router = inject(Router);
  
  // constructor
  constructor() {
    const config = inject(NgbDropdownConfig);

    config.placement = 'bottom-right';
  }

    logout() {
    // Redirigir al login
    this.router.navigate(['/home']);
  }
}
