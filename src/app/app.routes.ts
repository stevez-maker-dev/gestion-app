import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./inicio/inicio.module').then(m => m.InicioModule)
    },
    {
        path: 'productos',
        loadChildren: () => 
            import('./productos/productos.module').then(m => m.ProductosModule)
    },
    {
        path: 'usuarios',
        loadChildren: () =>
            import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
