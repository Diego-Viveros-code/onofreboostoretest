import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-signin',
  imports: [FormsModule],
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent {
  email = 'onofre';
  password = 'onofre';

  router = inject(Router);

  login() {
    // login falso
    if (this.email && this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Completa usuario y clave');
    }
  }
}