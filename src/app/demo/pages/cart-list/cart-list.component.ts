import { Component } from '@angular/core';
// import { BookListComponent } from "../book-list/book-list.component";
// import { NavGlobal } from "src/app/demo/pages/nav-global/nav-global";
import { BookService } from '../book-list/book.service';

@Component({
  selector: 'app-cart-list',
  imports: [],
  providers: [BookService], 
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.scss'
})
export class CartListComponent {

}
