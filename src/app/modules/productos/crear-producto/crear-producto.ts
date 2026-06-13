import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../../services/productos/productos';

@Component({
  selector: 'app-crear-producto',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './crear-producto.html',
  styleUrl: './crear-producto.css',
})
export class CrearProducto {

  private fb = inject(FormBuilder);
  private productosService = inject(ProductosService);
  private router = inject(Router);

  formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [null, [Validators.required, Validators.min(1)]],
    descripcion: ['', Validators.required],
    descuento: [0]
  });

  getErrores(campo: string): string[] {
    const control = this.formulario.get(campo);
    const errores: string[] = [];
    
    if(control?.errors?.['required']) errores.push('Este campo es obligatorio');
    if(control?.errors?.['minlength']) errores.push('Minimo 3 caracteres.');
    if(control?.errors?.['min']) errores.push('El precio debe ser mayor a 0');

    return errores;
  }

  onSubmit(): void {
    if(this.formulario.invalid) return;

    const nuevo = {
      id: Date.now(),
      nombre: this.formulario.value.nombre!,
      precio: Number(this.formulario.value.precio),
      descripcion: this.formulario.value.descripcion!,
      descuento: Number(this.formulario.value.descuento) || 0
    };

    this.productosService.agregarProducto(nuevo);
    this.router.navigate(['/productos']);
  }
}
