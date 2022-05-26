import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
import { PopoverComponent } from '../components/popover/popover.component';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})

export class ProdutoPage implements OnInit {

  public sapato: any;
  public acessorio: any;
  public calca: any;
  public camisola: any;

  tamanhos: any = [
    "28","29","30","31","32","33","34","35"
  ]

  constructor(public popCtrl: PopoverController, private sapatoServ: ProdutosService, private camisolaServ: ProdutosService, private acessorioServ: ProdutosService, private calcaServ: ProdutosService ) { }

  ngOnInit() {
    this.sapatoServ.getInfoSapato().subscribe(infoSapato => {
      this.sapato = infoSapato;
    })
    this.acessorioServ.getInfoAcessorio().subscribe(infoAcessorio => {
      this.acessorio = infoAcessorio;
    })
    this.calcaServ.getInfoCalca().subscribe(infoCalca => {
      this.calca = infoCalca;
    })
    this.camisolaServ.getInfoCamisola().subscribe(infoCamisola => {
      this.camisola = infoCamisola;
    })    
  }

  async openPopover(ev: any){
    const popover = await this.popCtrl.create({
      component: PopoverComponent,
      event: ev
    })
    return await popover.present()
  }

  tamanho(item:string){
    console.log(item)
  }

}
