import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  mostrarDetalle: BehaviorSubject<string> = new BehaviorSubject<string>("");
  detalle$: Observable<string> = this.mostrarDetalle.asObservable();
  constructor() { }

  getPokemon(name: string){

      this.mostrarDetalle.next(name);

    }

}
