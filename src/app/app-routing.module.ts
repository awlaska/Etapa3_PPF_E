import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'p-inicial',
    loadChildren: () => import('./p-inicial/p-inicial.module').then( m => m.PInicialPageModule)
  },
  {
    path: 'camisola',
    loadChildren: () => import('./camisola/camisola.module').then( m => m.CamisolaPageModule)
  },
  {
    path: 'calca',
    loadChildren: () => import('./calca/calca.module').then( m => m.CalcaPageModule)
  },
  {
    path: 'sapato',
    loadChildren: () => import('./sapato/sapato.module').then( m => m.SapatoPageModule)
  },
  {
    path: 'acessorio',
    loadChildren: () => import('./acessorio/acessorio.module').then( m => m.AcessorioPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
