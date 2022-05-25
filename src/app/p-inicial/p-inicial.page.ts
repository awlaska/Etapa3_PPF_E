import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';


@Component({
  selector: 'app-p-inicial',
  templateUrl: './p-inicial.page.html',
  styleUrls: ['./p-inicial.page.scss'],
})
export class PInicialPage implements OnInit {

  constructor( public sapatoServ: ProdutosService ) { }

  public sapatos: any;
  searchTerm: string;
  
  ngOnInit() {
    this.sapatoServ.getSapatos().subscribe(data => {
      this.sapatos = data;
    });
  }

  verSapato(marca: string, rota: string) {
    this.sapatoServ.goToRotaSapato(marca, rota);
  }

}
