import { Component } from '@angular/core';
import { Elementos } from "../services/interfaces/elementos"
@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrl: './vista.component.scss'
})
export class VistaComponent {

  nombre: string = "enrique"
  edad: number = 26
  alumnos: string[] = []
  curso: number | null = null
  cambioColor: boolean=false
  visibility: boolean=true
  elementos: string[] = ["Elemento1","Elemento2","Elemento3","Elemento4"]

  elementos2: Elementos[] = [
    {id:1,nombre:"Elemento1"},
    {id:2,nombre:"Elemento2"},
    {id:3,nombre:"Elemento3"},
    {id:4,nombre:"Elemento4"},
    ]
  contructor(

  //private nombreServicio: tipo

    )

  {}
 toggleColor(): void{
   this.cambioColor=!this.cambioColor;
   }
 toggleVisibility(): void {
   this.visibility=!this.visibility
   }
}
