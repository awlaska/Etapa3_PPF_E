import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PInicialPageRoutingModule } from './p-inicial-routing.module';

import { PInicialPage } from './p-inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PInicialPageRoutingModule
  ],
  declarations: [PInicialPage]
})
export class PInicialPageModule {}
