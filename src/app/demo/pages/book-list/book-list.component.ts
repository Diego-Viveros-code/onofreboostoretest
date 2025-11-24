import { Component, inject, OnInit } from '@angular/core';
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

  // PAGINADOR
  paginaActual = 1;
  itemsPorPagina = 6; // Puedes cambiarlo
  totalPaginas = 1;

  // Inyección del service
  public bookService = inject(BookService);

  ngOnInit() {
    this.libros = this.bookService.getBooks();
    this.librosFiltrados = [...this.libros]; // Inicialmente mostrar todos
    this.totalPaginas = Math.ceil(this.libros.length / this.itemsPorPagina);
    this.aplicarPaginacion();
  }

  // FILTRO
  filtrar() {
    const texto = this.search.toLowerCase();

    const filtrados = this.libros.filter((l) => l.titulo.toLowerCase().includes(texto) || l.autor.toLowerCase().includes(texto));

    this.totalPaginas = Math.ceil(filtrados.length / this.itemsPorPagina);
    this.paginaActual = 1; // Resetear
    this.aplicarPaginacion(filtrados);
  }

  // APLICAR PAGINACIÓN
  aplicarPaginacion(lista = this.libros) {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    this.librosFiltrados = lista.slice(inicio, fin);
  }

  // CAMBIAR DE PÁGINA
  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.aplicarPaginacion(
        this.search
          ? this.libros.filter(
              (l) => l.titulo.toLowerCase().includes(this.search.toLowerCase()) || l.autor.toLowerCase().includes(this.search.toLowerCase())
            )
          : this.libros
      );
    }
  }

  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.aplicarPaginacion(
        this.search
          ? this.libros.filter(
              (l) => l.titulo.toLowerCase().includes(this.search.toLowerCase()) || l.autor.toLowerCase().includes(this.search.toLowerCase())
            )
          : this.libros
      );
    }
  }
  //   filtrar() {
  //   const texto = this.search.toLowerCase();
  //   this.librosFiltrados = this.libros.filter(libro =>
  //     libro.titulo.toLowerCase().includes(texto) ||
  //     libro.autor.toLowerCase().includes(texto) ||
  //     libro.categoria.toLowerCase().includes(texto)
  //   );
  // }

  public buscar() {
    console.log('buscar');
  }

  agregarAlCarrito(id: number) {
    console.log('Agregar al carrito: ', id);
  }
}
