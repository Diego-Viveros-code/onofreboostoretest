import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';
import { Book } from './book';
import { CartService } from '../services/cart.service';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-book-list',
  imports: [FormsModule, CommonModule, RouterModule],
  providers: [BookService],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss'
})
export class BookListComponent implements OnInit {
  // valores iniciales
  search = '';
  books = [];
  pagar = [];
  booksFiltered: Book[] = [];
  cart: Book[] = [];
  userId: number = 1;

  // valores de paginacion
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;

  public bookService = inject(BookService);
  public cartService = inject(CartService);
  public router = inject(RouterModule);

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data.map((book) => ({
          book_id: book.book_id,
          title: book.title,
          author: book.author,
          category: book.category,
          price: book.price,
          cover: environment.apiImages+'/'+book.cover
        }));

        this.booksFiltered = [...this.books];
        this.totalPages = Math.ceil(this.books.length / this.itemsPerPage);
        this.applyPagination();
      },
      error: (error) => {
        console.error('Error fetching books', error);
      }
    });
  }

  totalCarrito(): number {
    return this.pagar.reduce((suma, item) => suma + (parseInt(item.price, 10) || 0), 0);
  }

  pay() {
    // Armamos el objeto que se enviará al backend
    const orderItems = this.pagar.map((item) => ({
      book_id: item.book_id,
      title: item.title,
      author: item.author,
      category: item.category,
      price: item.price,
      quantity: 1
    }));

    // Calculamos el total sumando (precio * cantidad) de cada item
    const total = orderItems.reduce((suma, item) => {
      return suma + item.price * item.quantity;
    }, 0);

    // Si quieres enviar todo en un solo pedido:
    const payload = {
      user_id: this.userId,
      items: orderItems,
      total: total
    };

    console.log('enviado');
    console.log(JSON.stringify(payload));
    console.log('enviado');

    //envio de datos para backend
    this.cartService.pay(payload);

    this.cartService.pay(payload).subscribe({
      next: (data) => {
        console.log('Respuesta del backend:', data);

        const payUrl = data['pay_url'];
        console.log('URL de pago:', payUrl);

        if (payUrl) {
          // Abre en una nueva pestaña
          window.open(payUrl, '_blank');
        }

        window.location.href = '/order-page';
      },
      error: (err) => {
        console.error('Error al pagar:', err);
      }
    });
  }

  addToCart(book: Book): void {
    this.pagar.push(book);
  }

  removeItem(index: number): void {
    this.pagar.splice(index, 1);
  }

  getBookById(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  getBooksByCategory(category: string): Book[] {
    return this.books.filter((book) => book.category.toLowerCase() === category.toLowerCase());
  }

  searchBooks(term: string): Book[] {
    const lower = term.toLowerCase();
    return this.books.filter((book) => book.title.toLowerCase().includes(lower));
  }

  filter() {
    const text = this.search.toLowerCase();
    const filtered = this.books.filter((l) => l.title.toLowerCase().includes(text) || l.author.toLowerCase().includes(text));

    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    this.currentPage = 1;

    this.applyPagination(filtered);
  }

  applyPagination(list = this.books) {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.booksFiltered = list.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyPagination(
        this.search
          ? this.books.filter(
              (l) => l.title.toLowerCase().includes(this.search.toLowerCase()) || l.author.toLowerCase().includes(this.search.toLowerCase())
            )
          : this.books
      );
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyPagination(
        this.search
          ? this.books.filter(
              (l) => l.title.toLowerCase().includes(this.search.toLowerCase()) || l.author.toLowerCase().includes(this.search.toLowerCase())
            )
          : this.books
      );
    }
  }

  public searchAction() {
    console.log('search');
  }
}
