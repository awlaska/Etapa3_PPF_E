import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sapato',
  templateUrl: './sapato.page.html',
  styleUrls: ['./sapato.page.scss'],
})
export class SapatoPage implements OnInit {

  public infoSapato: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) {

   this.rotaAtiva.queryParams.subscribe(params => {
     if (this.router.getCurrentNavigation().extras.state) {
       this.infoSapato = this.router.getCurrentNavigation().extras.state.dadosSapato;
       console.log(this.infoSapato);
     }
   })
  }

  ngOnInit() {
  }

}
