import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public usuarios =[{name:'admin', password:'admin'}]

  constructor() {
  }


  validate(name: string, password: string): boolean {

    let salir=false;
    let valido=false;
    let contador=0;

    while (salir==false&&contador<this.usuarios.length){

      if(this.usuarios[contador].name==name&&this.usuarios[contador].password==password){
        salir=true;
        valido=true;
      }
      contador++;
    }
    return valido;
  }
  agregarUsuario(name: string, password: string){
    this.usuarios.push({name:name,password:password});
  }
}