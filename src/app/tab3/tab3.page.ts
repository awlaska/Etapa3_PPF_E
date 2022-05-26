import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

  public sapato: any;
  public camisola: any;
  public calca: any;
  public acessorio: any;

  constructor( private orientacao: ScreenOrientation, private route: Router, private navCtrl: NavController, private sapatoServ: ProdutosService, private camisolaServ: ProdutosService, private calcaServ: ProdutosService, private acessorioServ: ProdutosService ) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.sapatoServ.getInfoSapato().subscribe(infoSapato => {
      this.sapato = infoSapato;
    })
    this.camisolaServ.getInfoCamisola().subscribe(infoCamisola => {
      this.camisola = infoCamisola;
    })
    this.calcaServ.getInfoCalca().subscribe(infoCalca => {
      this.calca = infoCalca;
    })
    this.acessorioServ.getInfoAcessorio().subscribe(infoAcessorio => {
      this.acessorio = infoAcessorio;
    })
  }

  home(){
    this.route.navigate(['/tabs/p-inicial']);
  }
  
}
