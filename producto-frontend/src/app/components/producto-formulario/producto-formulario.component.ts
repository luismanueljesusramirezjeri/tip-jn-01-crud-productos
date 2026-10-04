import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './producto-formulario.component.html',
  styleUrl: './producto-formulario.component.css'
})
export class ProductoFormularioComponent implements OnChanges {

  productoForm: FormGroup;

  mensajeError = '';

  @Input() producto?: Producto;

  @Output() productoGuardado = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductoService
  ) {
    this.productoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: [0, [Validators.required, Validators.min(0)]],
      precio: [null, [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto'] && this.producto) {
      this.productoForm.patchValue({
        nombre: this.producto.nombre,
        descripcion: this.producto.descripcion,
        cantidad: this.producto.cantidad,
        precio: this.producto.precio
      });
    }
  }

  guardarProducto(): void {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    if (this.producto?.id) {

      this.productoService.actualizarProducto(
        this.producto.id,
        this.productoForm.value
      ).subscribe({
        next: (producto) => {
          console.log('Producto actualizado:', producto);
          this.mensajeError = '';
          this.productoForm.reset();
          this.productoGuardado.emit();
        },
        error: (error) => {
          console.error('Error al actualizar el producto:', error);
          this.mensajeError =
            error.error?.error || 'No se pudo actualizar el producto';
        }
      });

    } else {

      this.productoService.crearProducto(this.productoForm.value).subscribe({
        next: (producto) => {
          console.log('Producto creado:', producto);
          this.mensajeError = '';
          this.productoForm.reset();
          this.productoGuardado.emit();
        },
        error: (error) => {
          console.error('Error al crear el producto:', error);
          this.mensajeError =
            error.error?.error || 'No se pudo crear el producto';
        }
      });

    }
  }
}
