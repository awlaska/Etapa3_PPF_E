import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})

export class ProdutoPage implements OnInit {

  public sapato: any;
  // public acessorio: any;
  // public calca: any;
  public camisola: any;

  constructor(private sapatoServ: ProdutosService, private camisolaServ: ProdutosService) { }

  ngOnInit() {
    this.sapatoServ.getInfoSapato().subscribe(infoSapato => {
      this.sapato = infoSapato;
    })
    // this.acessorioServ.getInfoAcessorio().subscribe(infoAcessorio => {
    //   this.acessorio = infoAcessorio;
    // })
    // this.calcaServ.getInfoCalca().subscribe(infoCalca => {
    //   this.calca = infoCalca;
    // })
    this.camisolaServ.getInfoCamisola().subscribe(infoCamisola => {
      this.camisola = infoCamisola;
    })
    // , private acessorioServ: ProdutosService, private calcaServ: ProdutosService
    
  }

}
