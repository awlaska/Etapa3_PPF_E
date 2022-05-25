import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-sapato',
  templateUrl: './sapato.page.html',
  styleUrls: ['./sapato.page.scss'],
})
export class SapatoPage implements OnInit {

  constructor( public sapatoServ: ProdutosService ) {}

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
