import { Component } from '@angular/core';
import { CartListComponent } from "../cart-list/cart-list.component";
import { BookService } from '../book-list/book.service';

@Component({
  selector: 'app-cart',
  imports: [CartListComponent],
  providers: [BookService], 
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent {

}
