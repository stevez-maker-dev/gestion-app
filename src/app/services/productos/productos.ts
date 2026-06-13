import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  descuento?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  private productos: Producto[] = [
    { id: 1, nombre: 'Teclado mecánico', precio: 85000, descripcion: 'Teclado con switches blue y retroiluminación RGB.', descuento: 10 },
    { id: 2, nombre: 'Mouse inalámbrico', precio: 45000, descripcion: 'Mouse inalámbrico con autonomía de 12 meses.', descuento: 0 },
    { id: 3, nombre: 'Monitor 24"', precio: 320000, descripcion: 'Monitor Full HD 1080p, panel IPS, 75Hz.', descuento: 15 },
    { id: 4, nombre: 'Auriculares USB', precio: 60000, descripcion: 'Auriculares con micrófono y sonido envolvente.', descuento: 0 },
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }

  eliminarProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }

  calcularPrecioFinal(precio:number, descuento: number = 0): number {
    return precio - (precio * descuento / 100);
  }
}
