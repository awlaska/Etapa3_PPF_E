import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
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
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },  {
    path: 'finalizar',
    loadChildren: () => import('./compra/finalizar/finalizar/finalizar.module').then( m => m.FinalizarPageModule)
  },
  {
    path: 'selecloja',
    loadChildren: () => import('./compra/selecloja/selecloja/selecloja.module').then( m => m.SeleclojaPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
