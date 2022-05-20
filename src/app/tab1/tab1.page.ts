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
  private dataCalca: any;
  goBack() {
    this.navCtrl.back();
  }

  constructor( private navCtrl: NavController, private router: Router ) {
      
    this.dataCamisola = {
      "camisola": {
          "id": "1",
          "nome": "Camisola Laranja",
          "preco": "9.99€",
          "img": "camisolaLaranja.jpg"
        },
    }
    this.dataCalca = {
      "calca": {
          "id": "1",
          "nome": "Calça Preta",
          "preco": "9.99€",
          "img": "calcaPreta.jpg"
        },
    }
  }

  public verCategoria (categoriakey: string) {
    if (categoriakey == 'camisola'){
      let infoDaCamisola: NavigationExtras;
        infoDaCamisola = {
          state: {
            dadosCamisola: this.dataCamisola[categoriakey]
          }
        }
        // Utilização de Extras State (novo desde o Angular 7.2)
        this.router.navigate(['camisola'], infoDaCamisola);
    }else if (categoriakey == 'calca'){
        let infoDaCalaca: NavigationExtras;
        infoDaCalaca = {
           state: {
             dadosCalca: this.dataCalca[categoriakey]
           }
         }
         // Utilização de Extras State (novo desde o Angular 7.2)
        this.router.navigate(['calca'], infoDaCalaca);
      }
  }


}
