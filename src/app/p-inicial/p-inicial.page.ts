import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';


@Component({
  selector: 'app-p-inicial',
  templateUrl: './p-inicial.page.html',
  styleUrls: ['./p-inicial.page.scss'],
})
export class PInicialPage implements OnInit {

  constructor( public sapatoServ: ProdutosService , public camisolaServ: ProdutosService ,  public acessorioServ: ProdutosService , public calcaServ: ProdutosService ) { }

  public sapatos: any;
  public camisolas: any;
  public acessorios: any;
  public calcas: any;
  searchTerm: string;
  
  ngOnInit() {
    this.sapatoServ.getSapatos().subscribe(data => {
      this.sapatos = data;
    });
    this.camisolaServ.getCamisolas().subscribe(data => {
      this.camisolas = data;
    });
    this.acessorioServ.getAcessorios().subscribe(data => {
      this.acessorios = data;
    });
    this.calcaServ.getCalcas().subscribe(data => {
      this.calcas = data;
    });
  }

  verSapato(marca: string, rota: string) {
    this.sapatoServ.goToRotaSapato(marca, rota);
  }
  verCamisola(marca: string, rota: string) {
    this.camisolaServ.goToRotaCamisola(marca, rota);
  }
  verAcessorio(marca: string, rota: string) {
    this.acessorioServ.goToRotaAcessorio(marca, rota);
  }
  verCalca(marca: string, rota: string) {
    this.calcaServ.goToRotaCalca(marca, rota);
  }
}
