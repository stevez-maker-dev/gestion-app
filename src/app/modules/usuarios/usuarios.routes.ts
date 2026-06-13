import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';
import { DetalleUsuario } from './detalle-usuario/detalle-usuario';
import { CrearUsuario } from './crear-usuario/crear-usuario';

const routes: Routes = [
    {
        path: '',
        component: ListaUsuarios
    },
    {
        path: 'crear',
        component: CrearUsuario
    },
    {
        path: ':id',
        component: DetalleUsuario
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {}