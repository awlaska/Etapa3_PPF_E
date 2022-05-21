import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-camisola',
  templateUrl: './camisola.page.html',
  styleUrls: ['./camisola.page.scss'],
})
export class CamisolaPage implements OnInit {

  constructor( private router: Router ) {}

  public dataCamisola: any;
  
  ngOnInit() {
    fetch('./assets/data/camisola.json')
      .then(res => res.json())
      .then(json => {
        this.dataCamisola = json;
      });
  }
}
