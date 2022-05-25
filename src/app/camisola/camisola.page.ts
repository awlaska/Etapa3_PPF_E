import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-camisola',
  templateUrl: './camisola.page.html',
  styleUrls: ['./camisola.page.scss'],
})
export class CamisolaPage implements OnInit {

  constructor( public camisolaServ: ProdutosService ) {}

  public camisolas: any;
  searchTerm: string;
  
  ngOnInit() {
    this.camisolaServ.getCamisolas().subscribe(data => {
      this.camisolas = data;
    });
  }

  verCamisola(marca: string, rota: string) {
    this.camisolaServ.goToRotaCamisola(marca, rota);
  }
}
