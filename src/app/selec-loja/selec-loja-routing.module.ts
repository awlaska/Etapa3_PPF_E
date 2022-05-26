import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecLojaPage } from './selec-loja.page';

const routes: Routes = [
  {
    path: '',
    component: SelecLojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecLojaPageRoutingModule {}
