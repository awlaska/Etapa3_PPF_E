import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-calca',
  templateUrl: './calca.page.html',
  styleUrls: ['./calca.page.scss'],
})
export class CalcaPage implements OnInit {

  constructor( public calcaServ: ProdutosService ) {}

  public calcas: any;
  searchTerm: string;
  
  ngOnInit() {
    this.calcaServ.getCalcas().subscribe(data => {
      this.calcas = data;
    });
  }

  verCalca(marca: string, rota: string) {
    this.calcaServ.goToRotaCalca(marca, rota);
  }

}

