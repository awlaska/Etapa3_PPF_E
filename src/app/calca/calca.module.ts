import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcaPageRoutingModule } from './calca-routing.module';

import { CalcaPage } from './calca.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcaPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CalcaPage]
})
export class CalcaPageModule {}
