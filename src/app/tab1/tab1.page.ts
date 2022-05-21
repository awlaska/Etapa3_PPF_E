import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private navCtrl: NavController, private router: Router ) {}
  
  goBack() {
    this.navCtrl.back();
  }

  public verCategoria (categoriakey: string) {
    //se string for igual á cateogria camisola, direciona para produtos da categoria
    if (categoriakey == 'camisola'){
        // Utilização de Extras State (novo desde o Angular 7.2)
        this.router.navigate(['camisola']);
    //se string for igual á cateogria calca, direciona para produtos da categoria
    }else if (categoriakey == 'calca'){
         // Utilização de Extras State (novo desde o Angular 7.2)
        this.router.navigate(['calca']);
      //se string for igual á cateogria sapato, direciona para produtos da categoria
    }else if (categoriakey == 'sapato'){
         // Utilização de Extras State (novo desde o Angular 7.2)
        this.router.navigate(['sapato']);
      //se string for igual á cateogria acessorio, direciona para produtos da categoria
    }else if (categoriakey == 'acessorio'){
         // Utilização de Extras State (novo desde o Angular 7.2)
        this.router.navigate(['acessorio']);
      }
  }
}
