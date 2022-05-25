import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-acessorio',
  templateUrl: './acessorio.page.html',
  styleUrls: ['./acessorio.page.scss'],
})
export class AcessorioPage implements OnInit {

  constructor( public acessorioServ: ProdutosService ) {}

  public acessorios: any;
  searchTerm: string;

  ngOnInit() {
    this.acessorioServ.getAcessorios().subscribe(data => {
      this.acessorios = data;
    });
  }

  verAcessorio(marca: string, rota: string) {
    this.acessorioServ.goToRotaAcessorio(marca, rota);
  }
  
}
