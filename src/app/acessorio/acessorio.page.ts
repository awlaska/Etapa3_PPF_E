import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-acessorio',
  templateUrl: './acessorio.page.html',
  styleUrls: ['./acessorio.page.scss'],
})
export class AcessorioPage implements OnInit {

  constructor( private router: Router ) {}

  public dataAcessorio: any;
  
  ngOnInit() {
    fetch('./assets/data/acessorio.json')
      .then(res => res.json())
      .then(json => {
        this.dataAcessorio = json;
      });
  }
}
