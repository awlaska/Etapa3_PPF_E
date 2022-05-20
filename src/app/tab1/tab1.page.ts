import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private dataCamisolas: any;

  constructor( private navCtrl: NavController, private router: Router ) {
      
    this.dataCamisolas = {
      "jumanji": {
          "id": "1",
          "title": "Jumanji",
          "imdb_rating": "7.0",
          "release_year": "1995",
          "img": "jumanji.jpg"
        },
        "jumanjiw": {
          "id": "2",
          "title": "Jumanji: Welcome to the Jungle",
          "imdb_rating": "6.9",
          "release_year": "2017",
          "img": "jumanjiw.jpg"
        },
        "themazerunner": {
          "id": "3",
          "title": "The Maze Runner",
          "imdb_rating": "6.8",
          "release_year": "2014",
          "img": "themazerunner.jpg"
        },
        "themartian": {
          "id": "4",
          "title": "The Martian",
          "imdb_rating": "8.0",
          "release_year": "2015",
          "img": "themartian.jpg"
        },
        "coco": {
          "id": "5",
          "title": "Coco",
          "imdb_rating": "8.4",
          "release_year": "2017",
          "img": "coco.jpg"
        },
        "knowing": {
          "id": "6",
          "title": "Knowing",
          "imdb_rating": "6.2",
          "release_year": "2009",
          "img": "knowing.jpg"
        },
        "thevillage": {
          "id": "7",
          "title": "The Village",
          "imdb_rating": "6.5",
          "release_year": "2004",
          "img": "thevillage.jpg"
        },
        "alien": {
          "id": "8",
          "title": "Alien",
          "imdb_rating": "8.4",
          "release_year": "1979",
          "img": "alien.jpg"
        }
    }
  }

  public verCategoria (camisolakey: string) {
    let infoCamisola: NavigationExtras;
    infoCamisola = {
      state: {
        dadosCamisola: this.dataCamisolas[camisolakey]
      }
    }
    // Utilização de Extras State (novo desde o Angular 7.2)
    this.router.navigate(['camisola'], infoCamisola);
  }

  goBack() {
    this.navCtrl.back();
  }
}
