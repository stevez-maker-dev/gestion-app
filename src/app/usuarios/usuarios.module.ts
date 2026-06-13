import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';
import { DetalleUsuario } from './detalle-usuario/detalle-usuario';
import { UsuariosRoutingModule } from './usuarios.routes';

@NgModule({
    imports: [
        CommonModule,
        UsuariosRoutingModule,
        ListaUsuarios,
        DetalleUsuario
    ]
})
export class UsuariosModule {}