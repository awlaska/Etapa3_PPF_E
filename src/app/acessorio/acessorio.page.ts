import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-acessorio',
  templateUrl: './acessorio.page.html',
  styleUrls: ['./acessorio.page.scss'],
})
export class AcessorioPage implements OnInit {

  public infoAcessorio: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) {

   this.rotaAtiva.queryParams.subscribe(params => {
     if (this.router.getCurrentNavigation().extras.state) {
       this.infoAcessorio = this.router.getCurrentNavigation().extras.state.dadosAcessorio;
       console.log(this.infoAcessorio);
     }
   })
  }

  ngOnInit() {
  }

}
