import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from './book.service';
import { CommonModule } from '@angular/common';
import { Book } from './book';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  imports: [FormsModule, CommonModule],
  providers: [BookService],
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

  //Inyección del service
  public bookService = inject(BookService);

  ngOnInit() {
    this.obtenerLibros();
  }

  obtenerLibros() {
    this.bookService.getBooks().subscribe({
      next: (datos) => {
        this.libros = datos.map((libro) => ({
          id: libro.id,
          titulo: libro.title,
          autor: libro.author,
          categoria: libro.category,
          precio: libro.price,
          cover: `http://localhost:8000/libros/${libro.cover}`
        }));

        this.librosFiltrados = [...this.libros];
        this.totalPaginas = Math.ceil(this.libros.length / this.itemsPorPagina);
        this.aplicarPaginacion();
      },
      error: (error) => {
        console.error('Error al obtener los libros', error);
      }
    });
  }

  // Obtener libro por ID
  getBookById(id: number): Book | undefined {
    return this.libros.find((book) => book.id === id);
  }

  // Filtrar por categoría
  getBooksByCategory(category: string): Book[] {
    return this.libros.filter((book) => book.categoria.toLowerCase() === category.toLowerCase());
  }

  // Buscar por título
  searchBooks(term: string): Book[] {
    const lower = term.toLowerCase();
    return this.libros.filter((book) => book.titulo.toLowerCase().includes(lower));
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

  public buscar() {
    console.log('buscar');
  }

  agregarAlCarrito(id: number) {
    console.log('Agregar al carrito: ', id);
  }
}
