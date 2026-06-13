import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';
import { DetalleUsuario } from './detalle-usuario/detalle-usuario';

const routes: Routes = [
    {
        path: '',
        component: ListaUsuarios
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