import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecLojaPageRoutingModule } from './selec-loja-routing.module';

import { SelecLojaPage } from './selec-loja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecLojaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SelecLojaPage]
})
export class SelecLojaPageModule {}
