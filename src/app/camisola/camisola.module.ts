import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamisolaPageRoutingModule } from './camisola-routing.module';

import { CamisolaPage } from './camisola.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamisolaPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CamisolaPage]
})
export class CamisolaPageModule {}
