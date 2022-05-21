import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calca',
  templateUrl: './calca.page.html',
  styleUrls: ['./calca.page.scss'],
})
export class CalcaPage implements OnInit {

  constructor( private router: Router ) {}

  public dataCalca: any;
  
  ngOnInit() {
    fetch('./assets/data/calca.json')
      .then(res => res.json())
      .then(json => {
        this.dataCalca = json;
      });
  }
}

