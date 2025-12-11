import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
// import { AdminComponent } from './theme/layout/admin/admin.component';
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
  {
    path: 'order-page',
    loadComponent: () => import('./demo/pages/orders/order-page.component').then((c) => c.OrderComponent)
  },
    {
    path: 'success',
    loadComponent: () => import('./demo/pages/success/success-page.component').then((c) => c.SuccessComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./demo/pages/cart/cart.component').then((c) => c.CartComponent)
  },
  // {
  //   path: '',
  //   component: AdminComponent,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadComponent: () => import('./demo/dashboard/dashboard.component').then((c) => c.DashboardComponent)
  //     },

  //     {
  //       path: 'home',
  //       loadComponent: () => import('./demo/pages/home/home.component').then((c) => c.HomeComponent)
  //     },
  //     {
  //       path: 'order-page',
  //       loadComponent: () => import('./demo/pages/orders/order-page.component').then((c) => c.SamplePageComponent)
  //     },
  //     {
  //       path: 'cart-page',
  //       loadComponent: () => import('./demo/pages/cart2/cart-page.component').then((c) => c.CartPageComponent)
  //     },
  //     {
  //       path: 'book-list',
  //       loadComponent: () => import('./demo/pages/book-list/book-list.component').then((c) => c.BookListComponent)
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
