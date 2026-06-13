import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuariosService, Usuario } from '../../services/usuarios/usuarios';
import { EstadoUsuarioPipe } from '../../pipes/estado-usuarios/estado-usuario-pipe';

@Component({
  selector: 'app-detalle-usuario',
  imports: [CommonModule, RouterLink, EstadoUsuarioPipe],
  templateUrl: './detalle-usuario.html',
  styleUrl: './detalle-usuario.css',
})
export class DetalleUsuario implements OnInit {

  usuario: Usuario | undefined;

  private usuariosService = inject(UsuariosService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuario = this.usuariosService.getUsuarioById(id);
  }
}
