import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { NavController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-calca',
  templateUrl: './calca.page.html',
  styleUrls: ['./calca.page.scss'],
})
export class CalcaPage implements OnInit {

  constructor( private orientacao: ScreenOrientation, private route: Router, private navCtrl: NavController, public calcaServ: ProdutosService ) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

  public calcas: any;
  searchTerm: string;
  
  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.calcaServ.getCalcas().subscribe(data => {
      this.calcas = data;
    });
  }

  verCalca(marca: string, rota: string) {
    this.calcaServ.goToRotaCalca(marca, rota);
  }

  home(){
    this.route.navigate(['/tabs/p-inicial']);
  }
}

