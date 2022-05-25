import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  private sapatos: any;
  private acessorios: any;
  private calcas: any;
  private camisolas: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

  // Sapatos

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

  goToRotaSapato(marca: string, rota: string) {
    const extras: NavigationExtras = {
      state: {
        sapato: this.sapatos[marca]
      }
    };
    this.router.navigate([rota], extras);
  }

  // Acessorios

  getAcessorios() {
    return new Observable (observer => {
      fetch('./assets/data/acessorio.json')
        .then(resposta => resposta.json())
        .then(json => {
          this.acessorios = json;
          observer.next(json);
          observer.complete();
        });
    });
  }

  getInfoAcessorio() {
    return new Observable (observer => {
      this.rotaAtiva.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          observer.next(this.router.getCurrentNavigation().extras.state.acessorio);
          observer.complete();
        }
      });
    });
  }

  goToRotaAcessorio(marca: string, rota: string) {
    const extras: NavigationExtras = {
      state: {
        acessorio: this.acessorios[marca]
      }
    };
    this.router.navigate([rota], extras);
  }

  // Calcas

  getCalcas() {
    return new Observable (observer => {
      fetch('./assets/data/calca.json')
        .then(resposta => resposta.json())
        .then(json => {
          this.calcas = json;
          observer.next(json);
          observer.complete();
        });
    });
  }

  getInfoCalca() {
    return new Observable (observer => {
      this.rotaAtiva.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          observer.next(this.router.getCurrentNavigation().extras.state.calca);
          observer.complete();
        }
      });
    });
  }

  goToRotaCalca(marca: string, rota: string) {
    const extras: NavigationExtras = {
      state: {
        calca: this.calcas[marca]
      }
    };
    this.router.navigate([rota], extras);
  }

  // Camisolas

  getCamisolas() {
    return new Observable (observer => {
      fetch('./assets/data/camisola.json')
        .then(resposta => resposta.json())
        .then(json => {
          this.camisolas = json;
          observer.next(json);
          observer.complete();
        });
    });
  }

  getInfoCamisola() {
    return new Observable (observer => {
      this.rotaAtiva.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          observer.next(this.router.getCurrentNavigation().extras.state.camisolas);
          observer.complete();
        }
      });
    });
  }

  goToRotaCamisola(marca: string, rota: string) {
    const extras: NavigationExtras = {
      state: {
        camisola: this.camisolas[marca]
      }
    };
    this.router.navigate([rota], extras);
  }

}
