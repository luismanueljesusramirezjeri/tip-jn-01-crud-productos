import { Component, ViewChild } from '@angular/core';
import { Producto } from './models/producto';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
import { ProductoFormularioComponent } from './components/producto-formulario/producto-formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductoListaComponent,
    ProductoFormularioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild(ProductoListaComponent)
  productoLista!: ProductoListaComponent;

  productoSeleccionado?: Producto;

  actualizarLista(): void {
    this.productoLista.listarProductos();
    this.productoSeleccionado = undefined;
  }

  seleccionarProducto(producto: Producto): void {
    this.productoSeleccionado = producto;
  }
}