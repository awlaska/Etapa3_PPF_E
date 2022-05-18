import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PInicialPage } from './p-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: PInicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PInicialPageRoutingModule {}
