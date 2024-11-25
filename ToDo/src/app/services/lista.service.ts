import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Lista} from "../lista";

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private listas = new BehaviorSubject<Lista[]>([
      {
        actividad:"actividad1",
        descripcion:"hola"
  },

  ]);
  listas$ = this.listas.asObservable();

  constructor() { }

  actualizar(list: Lista[]) {
    this.listas.next(list);
  }



}
