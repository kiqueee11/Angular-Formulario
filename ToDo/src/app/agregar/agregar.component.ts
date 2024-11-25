import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ListaService} from "../services/lista.service";
import {Lista} from "../lista";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.scss'
})
export class AgregarComponent {

formulario: FormGroup;


 nuevaTarea:Lista = {
   actividad:"",
   descripcion:""};



constructor(

    private formBuilder: FormBuilder,
    private listaService: ListaService,
    private router: Router
) {
  this.formulario = this.formBuilder.group({
    actividad:['', Validators.required],
    descripcion:['', Validators.required]
  })
}

crear(): void {
  alert('creado');
  this.nuevaTarea.actividad=this.formulario.get('actividad')?.value;
  this.nuevaTarea.descripcion=this.formulario.get('descripcion')?.value;

  this.router.navigate(['main']);
}

}
