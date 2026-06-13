import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UsuariosService, Usuario } from '../../../services/usuarios/usuarios';
import { EstadoUsuarioPipe } from '../../../pipes/estado-usuarios/estado-usuario-pipe';

@Component({
  selector: 'app-lista-usuarios',
  imports: [CommonModule, RouterLink, EstadoUsuarioPipe],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios implements OnInit {

  usuarios: Usuario[] = [];

  private usuariosService = inject(UsuariosService);

  ngOnInit(): void{
    this.usuarios = this.usuariosService.getUsuarios();
  }

  eliminar(id: number): void{
    this.usuariosService.eliminarUsuario(id);
    this.usuarios = this.usuariosService.getUsuarios();
  }

  cambiarEstado(id: number): void{
    this.usuariosService.cambiarEstado(id);
  }
}
