import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamisolaPageRoutingModule } from './camisola-routing.module';

import { CamisolaPage } from './camisola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamisolaPageRoutingModule
  ],
  declarations: [CamisolaPage]
})
export class CamisolaPageModule {}
