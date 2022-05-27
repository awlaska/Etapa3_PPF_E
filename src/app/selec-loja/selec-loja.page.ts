import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-selec-loja',
  templateUrl: './selec-loja.page.html',
  styleUrls: ['./selec-loja.page.scss'],
})
export class SelecLojaPage implements OnInit {

  LojaForm: FormGroup;
  isSubmitted: boolean;

  constructor( public formBuilder: FormBuilder, private orientacao: ScreenOrientation, private route: Router, private alertCtrl: AlertController ) { 
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.LojaForm = this.formBuilder.group({
      loja: ['', [Validators.required]]
   });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.LojaForm.valid) {
      return false;
    } else {
      this.finalizar();
    }
  }

  // bind (ligação) de uma propriedade de um objeto a uma função
  // quando a propriedade é "invocada" a função getter é utilizada
  get formControls() { 
    return this.LojaForm.controls;
  }

  home(){
    this.route.navigate(['/tabs/p-inicial']);
  }

  async finalizar(){
    await this.alertCtrl.create({
      header: "TugaKidsClothes:",
      message: "Loja selecionada com sucesso!"
    }).then(res => res.present());
  }

}