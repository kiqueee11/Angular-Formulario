import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../services/validator.service";

@Component({
  selector: 'app-layout-register',
  templateUrl: './layout-register.component.html',
  styleUrl: './layout-register.component.scss'
})
export class LayoutRegisterComponent {

  formulario: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private validator:ValidatorService

    ) {
      this.formulario = formBuilder.group({name: ["",[Validators.required, Validators.minLength(1)]],password:["",[Validators.required, Validators.minLength(1)]]})
    }
  cambiar(): void {
if (this.formulario.invalid) {
  alert("formulario invalid");
}else {
  this.validator.agregarUsuario(this.formulario.value.name,this.formulario.value.password)
  this.router.navigate(['/login'])
}



  }
}
