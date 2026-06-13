import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService, Producto } from '../../services/productos/productos';
import { DescuentoPipe } from '../../pipes/descuento/descuento-pipe';

@Component({
  selector: 'app-detalle-producto',
  imports: [CommonModule, RouterLink, DescuentoPipe],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProducto implements OnInit{

  producto: Producto | undefined;

  private productosService = inject(ProductosService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productosService.getProductoById(id);
  }
}
