import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SapatoPageRoutingModule } from './sapato-routing.module';

import { SapatoPage } from './sapato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SapatoPageRoutingModule
  ],
  declarations: [SapatoPage]
})
export class SapatoPageModule {}
