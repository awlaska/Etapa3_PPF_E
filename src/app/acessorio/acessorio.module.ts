import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcessorioPageRoutingModule } from './acessorio-routing.module';

import { AcessorioPage } from './acessorio.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcessorioPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AcessorioPage]
})
export class AcessorioPageModule {}
