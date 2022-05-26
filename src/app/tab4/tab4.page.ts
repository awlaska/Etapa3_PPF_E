import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {
  constructor( private orientacao: ScreenOrientation, private route: Router, private navCtrl: NavController ) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
  }

  home(){
    this.route.navigate(['/tabs/p-inicial']);
  }
}
