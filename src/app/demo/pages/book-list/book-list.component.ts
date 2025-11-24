import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from './book.service';
import { CommonModule } from '@angular/common';
import { Book } from './book';

@Component({
  selector: 'app-book-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss'
})
export class BookListComponent implements OnInit {
  search = '';
  libros = [];
  librosFiltrados: Book[] = [];

  // Inyección del service 
  public bookService = inject(BookService);

  ngOnInit() {
      this.libros = this.bookService.getBooks();
       this.librosFiltrados = [...this.libros]; // Inicialmente mostrar todos
  }

    filtrar() {
    const texto = this.search.toLowerCase();
    this.librosFiltrados = this.libros.filter(libro => 
      libro.titulo.toLowerCase().includes(texto) ||
      libro.autor.toLowerCase().includes(texto) ||
      libro.categoria.toLowerCase().includes(texto)
    );
  }

  public buscar(){
    console.log("buscar");
  }

  agregarAlCarrito(id: number) {
    console.log("Agregar al carrito: ", id);
  }
}
