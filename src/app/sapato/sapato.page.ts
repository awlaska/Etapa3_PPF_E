import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { ModalController, NavController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { MyModalPage } from '../components/my-modal/my-modal.page';

@Component({
  selector: 'app-sapato',
  templateUrl: './sapato.page.html',
  styleUrls: ['./sapato.page.scss'],
})
export class SapatoPage implements OnInit {

  constructor( private modalCtrl: ModalController, private orientacao: ScreenOrientation, private route: Router, private navCtrl: NavController, public sapatoServ: ProdutosService ) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

  public sapatos: any;
  searchTerm: string;
  
  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.sapatoServ.getSapatos().subscribe(data => {
      this.sapatos = data;
    });
  }

  verSapato(marca: string, rota: string) {
    this.sapatoServ.goToRotaSapato(marca, rota);
  }

  home(){
    this.route.navigate(['/tabs/p-inicial']);
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: MyModalPage,
      cssClass: 'transparent-modal'
    });
    await modal.present();
  }
  
}
