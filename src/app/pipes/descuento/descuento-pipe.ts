import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento',
})
export class DescuentoPipe implements PipeTransform {
  transform(precio: number, porcentaje: number = 0): number {
    return precio - (precio * porcentaje / 100);
  }
}
