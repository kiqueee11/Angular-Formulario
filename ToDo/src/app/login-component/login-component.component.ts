import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../services/validator.service";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})
export class LoginComponentComponent {

  formulario: FormGroup;
  protected readonly navigator = navigator;
  constructor(
      private router:Router,
      private formBuilder: FormBuilder,
      private validator:ValidatorService
  ) {

    this.formulario = formBuilder.group({name: ["",[Validators.required, Validators.minLength(1)]],password:["",[Validators.required, Validators.minLength(1)]]})

  }
  cambiar(): void {

    if(this.formulario.valid){

      if(this.validator.validate(this.formulario.value.name,this.formulario.value.password)){
        this.router.navigate(['/main'])
      }else {
        alert("Formulario invalid");
      }

    }else {
      alert("Formulario invalid");
    }





  }
}
