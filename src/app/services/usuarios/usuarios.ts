import { Injectable } from '@angular/core';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  activo: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {

  private usuarios: Usuario[] = [
    { id: 1, nombre: 'Ana García', email: 'ana@email.com', rol: 'Admin', activo: true },
    { id: 2, nombre: 'Carlos López', email: 'carlos@email.com', rol: 'Editor', activo: true },
    { id: 3, nombre: 'María Fernández', email: 'maria@email.com', rol: 'Viewer', activo: false },
    { id: 4, nombre: 'Juan Pérez', email: 'juan@email.com', rol: 'Editor', activo: true },
  ];

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  getUsuarioById(id: number): Usuario | undefined {
    return this.usuarios.find(u => u.id === id);
  }

  eliminarUsuario(id: number): void {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }

  cambiarEstado(id: number): void {
    const usuario = this.usuarios.find(u => u.id === id);
    if(usuario){
      usuario.activo = !usuario.activo;
    }
  }
}
