import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sapato',
  templateUrl: './sapato.page.html',
  styleUrls: ['./sapato.page.scss'],
})
export class SapatoPage implements OnInit {

  constructor( private router: Router ) {}

  public dataSapato: any;
  
  ngOnInit() {
    fetch('./assets/data/sapato.json')
      .then(res => res.json())
      .then(json => {
        this.dataSapato = json;
      });
  }
}
