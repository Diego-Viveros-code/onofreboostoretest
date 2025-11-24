import { Injectable } from '@angular/core';
import { Books } from './books'; 
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = Books;

  constructor() {}

  // Obtener todos los libros
  getBooks(): Book[] {
    return this.books;
  }

  // Obtener libro por ID
  getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  // Filtrar por categoría
  getBooksByCategory(category: string): Book[] {
    return this.books.filter(book => 
      book.categoria.toLowerCase() === category.toLowerCase()
    );
  }

  // Buscar por título
  searchBooks(term: string): Book[] {
    const lower = term.toLowerCase();
    return this.books.filter(book =>
      book.titulo.toLowerCase().includes(lower)
    );
  }

  // Simular agregar al carrito
  addToCart(bookId: number) {
    const book = this.getBookById(bookId);
    if (!book) return { success: false, message: 'Libro no encontrado' };

    // Aquí luego conectarías con un CartService real
    console.log(`✔ Libro agregado al carrito: ${book.titulo}`);

    return { success: true, book };
  }
}
