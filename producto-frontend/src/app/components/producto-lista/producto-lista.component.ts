import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent implements OnInit {

  @Output() editar = new EventEmitter<Producto>();

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(): void {
    this.productoService.listarProductos().subscribe({
      next: (datos) => {
        this.productos = datos;
        this.productosFiltrados = datos;
      },
      error: (error) => {
        console.error('Error al obtener los productos:', error);
      }
    });
  }

  buscarProducto(texto: string): void {
    const textoBusqueda = texto.toLowerCase().trim();

    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(textoBusqueda)
    );
  }

  editarProducto(producto: Producto): void {
    this.editar.emit(producto);
  }

  eliminarProducto(id: number): void {
    const confirmar = confirm('¿Está seguro de eliminar este producto?');

    if (!confirmar) {
      return;
    }

    this.productoService.eliminarProducto(id).subscribe({
      next: () => {
        console.log('Producto eliminado correctamente');
        this.listarProductos();
      },
      error: (error) => {
        console.error('Error al eliminar el producto:', error);
      }
    });
  }
}