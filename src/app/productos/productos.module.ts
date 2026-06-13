import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductos } from './lista-productos/lista-productos';
import { DetalleProducto } from './detalle-producto/detalle-producto';
import { ProductosRoutingModule } from './productos.routes';

@NgModule({
    imports: [
        CommonModule,
        ProductosRoutingModule,
        ListaProductos,
        DetalleProducto
    ]
})
export class ProductosModule {}