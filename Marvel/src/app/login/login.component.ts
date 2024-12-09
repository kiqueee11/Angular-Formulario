import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopupService} from '../services/utils/popup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  passStatus: boolean = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private popupService: PopupService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  togglePass(): void {
    this.passStatus = !this.passStatus;

  }
  enviar(): void {
    if(this.loginForm.invalid) {

      this.popupService.showMessage("error", "invalido","El formulario es invalido");

    }else{
      this.popupService.showMessage("success", "valido","El formulario es valido")

    }
  }
}
