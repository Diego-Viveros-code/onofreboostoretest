import { Component } from '@angular/core';
import { BookListComponent } from "../book-list/book-list.component";
import { NavGlobal } from "src/app/demo/pages/nav-global/nav-global";
import { BookService } from '../book-list/book.service';

@Component({
  selector: 'app-home',
  imports: [BookListComponent, NavGlobal],
  providers: [BookService], 
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
