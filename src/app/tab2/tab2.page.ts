import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  public sapatos: any;
  public camisolas: any;
  public calcas: any;
  public acessorios: any;

  constructor( private orientacao: ScreenOrientation, private route: Router, private navCtrl: NavController, private sapatoServ: ProdutosService, private camisolaServ: ProdutosService, private calcaServ: ProdutosService, private acessorioServ: ProdutosService ) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.sapatoServ.getInfoSapato().subscribe(infoSapato => {
      this.sapatos = infoSapato;
    })
    this.camisolaServ.getInfoCamisola().subscribe(infoCamisola => {
      this.camisolas = infoCamisola;
    })
    this.calcaServ.getInfoCalca().subscribe(infoCalca => {
      this.calcas = infoCalca;
    })
    this.acessorioServ.getInfoAcessorio().subscribe(infoAcessorio => {
      this.acessorios = infoAcessorio;
    })
  }

  selecLoja(){
    this.route.navigate(['/selec-loja']);
  }

  home(){
    this.route.navigate(['/tabs/p-inicial']);
  }
}
