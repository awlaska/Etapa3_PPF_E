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
  private dataSapato: any;
  private dataAcessorio: any;
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
    this.dataSapato = {
      "sapato": {
          "id": "1",
          "nome": "Vans Old Skool Pretas",
          "preco": "39.99€",
          "img": "sapatoPreto.jpg"
        },
    }
    this.dataAcessorio = {
      "acessorio": {
          "id": "1",
          "nome": "Anel",
          "preco": "2.99€",
          "img": "anel1.jpg"
        },
    }
  }

  public verCategoria (categoriakey: string) {
    //se string for igual á cateogria camisola, direciona para produtos da categoria
    if (categoriakey == 'camisola'){
      let infoDaCamisola: NavigationExtras;
        infoDaCamisola = {
          state: {
            dadosCamisola: this.dataCamisola[categoriakey]
          }
        }
        // Utilização de Extras State (novo desde o Angular 7.2)
        this.router.navigate(['camisola'], infoDaCamisola);
    //se string for igual á cateogria calca, direciona para produtos da categoria
    }else if (categoriakey == 'calca'){
        let infoDaCalca: NavigationExtras;
        infoDaCalca = {
           state: {
             dadosCalca: this.dataCalca[categoriakey]
           }
         }
         // Utilização de Extras State (novo desde o Angular 7.2)
        this.router.navigate(['calca'], infoDaCalca);
      //se string for igual á cateogria sapato, direciona para produtos da categoria
      }else if (categoriakey == 'sapato'){
        let infoDoSapato: NavigationExtras;
        infoDoSapato = {
           state: {
            dataSapato: this.dataSapato[categoriakey]
           }
         }
         // Utilização de Extras State (novo desde o Angular 7.2)
        this.router.navigate(['sapato'], infoDoSapato);
      //se string for igual á cateogria acessorio, direciona para produtos da categoria
      }else if (categoriakey == 'acessorio'){
        let infoDoAcessorio: NavigationExtras;
        infoDoAcessorio = {
           state: {
             dadosAcessorio: this.dataAcessorio[categoriakey]
           }
         }
         // Utilização de Extras State (novo desde o Angular 7.2)
        this.router.navigate(['acessorio'], infoDoAcessorio);
      }
  }
}
