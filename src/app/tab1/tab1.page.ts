import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  private dataCamisola: any;

  goBack() {
    this.navCtrl.back();
  }

  constructor( private navCtrl: NavController, private router: Router ) {
      
    this.dataCamisola = {
      "camisola": {
          "id": "1",
          "title": "Camisola Laranja",
          "imdb_rating": "7.0",
          "release_year": "1995",
          "img": "camisolaLaranja.jpg"
        },
    }
  }

  public verCategoria (camisolakey: string) {
    let infoDaCamisola: NavigationExtras;
    infoDaCamisola = {
      state: {
        dadosCamisola: this.dataCamisola[camisolakey]
      }
    }
    // Utilização de Extras State (novo desde o Angular 7.2)
    this.router.navigate(['camisola'], infoDaCamisola);
  }


}
