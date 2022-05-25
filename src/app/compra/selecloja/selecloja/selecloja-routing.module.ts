import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleclojaPage } from './selecloja.page';

const routes: Routes = [
  {
    path: '',
    component: SeleclojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleclojaPageRoutingModule {}
