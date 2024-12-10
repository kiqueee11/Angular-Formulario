import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopupService} from '../services/utils/popup.service';

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
              private popupService: PopupService
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
    if(this.formulario.invalid) {

      this.popupService.showMessage("error", "invalido","El formulario es invalido");

    }else{
      this.popupService.showMessage("success", "valido","El formulario es valido")

    }
  }

}
