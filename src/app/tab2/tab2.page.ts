import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  public sapato: any;

  constructor( private navCtrl: NavController, private sapatoServ: ProdutosService ) {}

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.sapatoServ.getInfoSapato().subscribe(infoSapato => {
      this.sapato = infoSapato;
    })
  }
  
}
