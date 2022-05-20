import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-camisola',
  templateUrl: './camisola.page.html',
  styleUrls: ['./camisola.page.scss'],
})
export class CamisolaPage implements OnInit {

  public infoCamisola: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) {
    /*
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.infoFilme = this.router.getCurrentNavigation().extras.state.dadosFilme;
      }
    });
    */
   this.rotaAtiva.queryParams.subscribe(params => {
     if (this.router.getCurrentNavigation().extras.state) {
       this.infoCamisola = this.router.getCurrentNavigation().extras.state.dadosFilme;
       console.log(this.infoCamisola);
     }
   })
  }

  ngOnInit() {
  }
}
