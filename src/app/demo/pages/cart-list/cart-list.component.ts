import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../book-list/book';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-list',
  imports: [],
  providers: [BookService],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.scss'
})
export class CartListComponent implements OnInit {
  cartItems: Book[] = [];
  public cartService = inject(CartService);

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    console.log('libros leidos:', this.cartItems); // depuración
  }

  removeItem(index: number): void {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCart(); // recarga para actualizar la vista
  }

  // clearAll(): void {
  //   this.cartService.clearCart();
  //   this.cartItems = [];
  // }
}
