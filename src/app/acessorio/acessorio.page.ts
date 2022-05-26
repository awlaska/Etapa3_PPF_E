import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { NavController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-acessorio',
  templateUrl: './acessorio.page.html',
  styleUrls: ['./acessorio.page.scss'],
})
export class AcessorioPage implements OnInit {

  constructor( private orientacao: ScreenOrientation, private route: Router, private navCtrl: NavController, public acessorioServ: ProdutosService ) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

  public acessorios: any;
  searchTerm: string;

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.acessorioServ.getAcessorios().subscribe(data => {
      this.acessorios = data;
    });
  }

  verAcessorio(marca: string, rota: string) {
    this.acessorioServ.goToRotaAcessorio(marca, rota);
  }
  
  home(){
    this.route.navigate(['/tabs/p-inicial']);
  }
  
}
