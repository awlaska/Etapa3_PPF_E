import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SapatoPage } from './sapato.page';

const routes: Routes = [
  {
    path: '',
    component: SapatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SapatoPageRoutingModule {}
