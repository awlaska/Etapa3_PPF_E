import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleclojaPageRoutingModule } from './selecloja-routing.module';

import { SeleclojaPage } from './selecloja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleclojaPageRoutingModule
  ],
  declarations: [SeleclojaPage]
})
export class SeleclojaPageModule {}
