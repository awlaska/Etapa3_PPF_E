import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PInicialPageRoutingModule } from './p-inicial-routing.module';

import { PInicialPage } from './p-inicial.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PInicialPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [PInicialPage]
})
export class PInicialPageModule {}
