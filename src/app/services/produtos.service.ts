import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  private sapatos: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

  getSapatos() {
    return new Observable (observer => {
      fetch('./assets/data/sapato.json')
        .then(resposta => resposta.json())
        .then(json => {
          this.sapatos = json;
          observer.next(json);
          observer.complete();
        });
    });
  }

  getInfoSapato() {
    return new Observable (observer => {
      this.rotaAtiva.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          observer.next(this.router.getCurrentNavigation().extras.state.sapato);
          observer.complete();
        }
      });
    });
  }

  goToRota(marca: string, rota: string) {
    const extras: NavigationExtras = {
      state: {
        sapato: this.sapatos[marca]
      }
    };
    this.router.navigate([rota], extras);
  }
}
