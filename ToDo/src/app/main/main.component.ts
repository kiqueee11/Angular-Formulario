import {Component, OnInit} from '@angular/core';
import {ListaService} from "../services/lista.service";
import {Lista} from "../lista";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

     showText: boolean = false;
     listas: Lista[] = [];

     constructor(private listaService: ListaService) {

     }
  toggleText(): void {
    this.showText=!this.showText;
    alert(this.showText);
  }
  ngOnInit(): void {
       this.listaService.listas$.subscribe(lista => {
         this.listas = lista;
       })
  }


}
