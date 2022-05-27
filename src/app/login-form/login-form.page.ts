import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {

  LoginForm: FormGroup;
  isSubmitted: boolean;
  showpassword: boolean;

  constructor(private orientacao: ScreenOrientation, private route: Router, public formBuilder: FormBuilder) {
    this.isSubmitted = false;
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

  togglePasswordText() {
    this.showpassword = !this.showpassword;
  }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(4)]]
   });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.LoginForm.valid) {
      return false;
    } else {
      this.home();
    }
  }
  
  // bind (ligação) de uma propriedade de um objeto a uma função
  // quando a propriedade é "invocada" a função getter é utilizada
  get formControls() { 
    return this.LoginForm.controls;
  }
  home(){
    this.route.navigate(['/tabs/p-inicial']);
  }

}
