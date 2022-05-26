import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecLojaPageRoutingModule } from './selec-loja-routing.module';

import { SelecLojaPage } from './selec-loja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecLojaPageRoutingModule
  ],
  declarations: [SelecLojaPage]
})
export class SelecLojaPageModule {}
