import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopupService} from '../services/utils/popup.service';
import {RegisterService} from '../services/auth/register.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent implements OnInit {

  numeros: any = []
  numero: number = 0;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private popupService: PopupService,
              private registerService: RegisterService,
  ) {
    this.formulario = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      correo: ['', Validators.required]

    })
  }

  ngOnInit(): void {

    for (let i = 0; i < 100; i++) {
      this.numeros.push(i);
    }

  }

  enviar(): void {
    if (this.formulario.valid) {

      this.registerService.check().subscribe({
        next: response => {
          this.popupService.showMessage("success", "Registro correcto", response.message,)
        },
        error: error => {
          console.log(error);
        }
      })
    }


  }
}
