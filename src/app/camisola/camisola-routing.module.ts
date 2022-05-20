import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamisolaPage } from './camisola.page';

const routes: Routes = [
  {
    path: '',
    component: CamisolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamisolaPageRoutingModule {}
