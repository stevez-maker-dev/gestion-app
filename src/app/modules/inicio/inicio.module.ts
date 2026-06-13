import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inicio } from './inicio/inicio';
import { InicioRoutingModule } from './inicio.routes';

@NgModule({
    imports: [
        CommonModule,
        InicioRoutingModule,
        Inicio
    ]
})
export class InicioModule {}