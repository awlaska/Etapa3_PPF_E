import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-selec-loja',
  templateUrl: './selec-loja.page.html',
  styleUrls: ['./selec-loja.page.scss'],
})
export class SelecLojaPage implements OnInit {

  constructor( private orientacao: ScreenOrientation, private route: Router ) { 
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
  }

  home(){
    this.route.navigate(['/tabs/p-inicial']);
  }

}
