import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { NavController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-camisola',
  templateUrl: './camisola.page.html',
  styleUrls: ['./camisola.page.scss'],
})
export class CamisolaPage implements OnInit {

  constructor( private orientacao: ScreenOrientation, private route: Router, private navCtrl: NavController, public camisolaServ: ProdutosService ) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

  public camisolas: any;
  searchTerm: string;
  
  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.camisolaServ.getCamisolas().subscribe(data => {
      this.camisolas = data;
    });
  }

  verCamisola(marca: string, rota: string) {
    this.camisolaServ.goToRotaCamisola(marca, rota);
  }

  home(){
    this.route.navigate(['/tabs/p-inicial']);
  }
  
}
