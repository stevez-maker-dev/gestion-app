import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../../services/usuarios/usuarios';

@Component({
  selector: 'app-crear-usuario',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './crear-usuario.html',
  styleUrl: './crear-usuario.css',
})
export class CrearUsuario {

  private fb = inject(FormBuilder);
  private usuariosService = inject(UsuariosService);
  private router = inject(Router);

  formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    rol: ['', Validators.required],
    activo: [true]
  });

  getErrores(campo: string): string[] {
    const control = this.formulario.get(campo);
    const errores: string[] = [];

    if(control?.errors?.['required']) errores.push('Este campo es obligatorio.');
    if(control?.errors?.['minlength']) errores.push('Minimo 3 caracteres.');
    if(control?.errors?.['email']) errores.push('El formato del email no es valido.');

    return errores;
  }

  onSubmit(): void {
    if(this.formulario.invalid) return;

    const nuevo = {
      id: Date.now(),
      nombre: this.formulario.value.nombre!,
      email: this.formulario.value.email!,
      rol: this.formulario.value.rol!,
      activo: this.formulario.value.activo ?? true
    };

    this.usuariosService.agregarUsuario(nuevo);
    this.router.navigate(['/usuarios']);
  }
}
