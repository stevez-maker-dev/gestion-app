import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductosService, Producto } from '../../services/productos/productos';
import { DescuentoPipe } from '../../pipes/descuento/descuento-pipe';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, RouterLink, DescuentoPipe],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {

  productos: Producto[] = [];

  private productosService = inject(ProductosService);

  ngOnInit(): void{
    this.productos = this.productosService.getProductos();
  }

  eliminar(id: number): void{
    this.productosService.eliminarProducto(id);
    this.productos = this.productosService.getProductos();
  }
}
