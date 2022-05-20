import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calca',
  templateUrl: './calca.page.html',
  styleUrls: ['./calca.page.scss'],
})
export class CalcaPage implements OnInit {

  public infoCalca: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) {

   this.rotaAtiva.queryParams.subscribe(params => {
     if (this.router.getCurrentNavigation().extras.state) {
       this.infoCalca = this.router.getCurrentNavigation().extras.state.dadosCalca;
       console.log(this.infoCalca);
     }
   })
  }

  ngOnInit() {
  }

}
