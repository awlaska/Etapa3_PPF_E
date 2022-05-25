import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})

export class ProdutoPage implements OnInit {

  public sapato: any;

  constructor(private sapatoServ: ProdutosService) { }

  ngOnInit() {
    this.sapatoServ.getInfoSapato().subscribe(infoSapato => {
      this.sapato = infoSapato;
    })
  }

}
