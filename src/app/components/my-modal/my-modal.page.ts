import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})

export class MyModalPage implements OnInit {

  constructor( private orientacao: ScreenOrientation, private modalCtrl: ModalController,  private route: Router, public sapatoServ: ProdutosService) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

  public sapatos: any;

  ngOnInit() {
    this.sapatoServ.getSapatos().subscribe(data => {
      this.sapatos = data;
    });
  }

  verSapato(marca: string, rota: string) {
    this.sapatoServ.goToRotaSapato(marca, rota);
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  selecLoja(){
    this.route.navigate(['/selec-loja']);
  }
}
