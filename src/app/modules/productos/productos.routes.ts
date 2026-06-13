import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductos } from './lista-productos/lista-productos';
import { DetalleProducto } from './detalle-producto/detalle-producto';
import { CrearProducto } from './crear-producto/crear-producto';

const routes: Routes = [
    {
        path: '',
        component: ListaProductos
    },
    {
        path: 'crear',
        component: CrearProducto
    },
    {
        path: ':id',
        component: DetalleProducto
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductosRoutingModule {}