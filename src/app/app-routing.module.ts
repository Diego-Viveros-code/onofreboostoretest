import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./demo/pages/home/home.component').then((c) => c.HomeComponent)
  },
  // {
  //   path: 'cart-page',
  //   loadComponent: () => import('./demo/pages/cart-list/cart-list.component').then((c) => c.CartListComponent)
  // },
  {
    path: 'cart',
    loadComponent: () => import('./demo/pages/cart/cart.component').then((c) => c.CartComponent)
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/pages/authentication/auth-signin/auth-signin.component').then((c) => c.AuthSigninComponent)
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },

      {
        path: 'home',
        loadComponent: () => import('./demo/pages/home/home.component').then((c) => c.HomeComponent)
      },
      {
        path: 'order-page',
        loadComponent: () => import('./demo/pages/orders/order-page.component').then((c) => c.SamplePageComponent)
      },
      {
        path: 'cart-page',
        loadComponent: () => import('./demo/pages/cart2/cart-page.component').then((c) => c.CartPageComponent)
      },
      {
        path: 'book-list',
        loadComponent: () => import('./demo/pages/book-list/book-list.component').then((c) => c.BookListComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
