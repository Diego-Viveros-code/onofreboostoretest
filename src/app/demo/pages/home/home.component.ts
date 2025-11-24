import { Component } from '@angular/core';
import { BookListComponent } from "../book-list/book-list.component";
import { NavGlobal } from "src/app/demo/pages/nav-global/nav-global";

@Component({
  selector: 'app-home',
  imports: [BookListComponent, NavGlobal],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
