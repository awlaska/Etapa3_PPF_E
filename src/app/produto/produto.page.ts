import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
import { PopoverComponent } from '../components/popover/popover.component';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})

export class ProdutoPage implements OnInit {

  public sapato: any;
  public camisola: any;
  public acessorio: any;
  public calca: any;

  tamanhos: any = [
    "26","27","28","29","30","31","32","33","34","35"
  ]

  constructor( private orientacao: ScreenOrientation, private route: Router, private navCtrl: NavController, public popCtrl: PopoverController, private sapatoServ: ProdutosService, private camisolaServ: ProdutosService, private acessorioServ: ProdutosService, private calcaServ: ProdutosService ) { 
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
    this.acessorioServ.getInfoAcessorio().subscribe(infoAcessorio => {
      this.acessorio = infoAcessorio;
    })
    this.calcaServ.getInfoCalca().subscribe(infoCalca => {
      this.calca = infoCalca;
    }) 
  }

  async openPopover(ev: any){
    const popover = await this.popCtrl.create({
      component: PopoverComponent,
      event: ev,
      cssClass: 'popover'
    })
    await popover.present()
  }

  tamanho(item:string){
    console.log(item)
  }

  verSapato(marca: string, rota: string) {
    this.sapatoServ.goToRotaSapato(marca, rota);
  }
  verCamisola(marca: string, rota: string) {
    this.camisolaServ.goToRotaCamisola(marca, rota);
  }
  verCalca(marca: string, rota: string) {
    this.calcaServ.goToRotaCalca(marca, rota);
  }
  verAcessorio(marca: string, rota: string) {
    this.acessorioServ.goToRotaAcessorio(marca, rota);
  }
  home(){
    this.route.navigate(['/tabs/p-inicial']);
  }

}
