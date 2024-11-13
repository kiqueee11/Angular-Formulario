import { Component,OnInit } from '@angular/core';
import { PokemonDetailService } from '../services/pokemon/pokemon-detail.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {

  nombrePokemon : string='';

  constructor(

    private pokemonDetailService : PokemonDetailService

    ){}

ngOnInit() : void{

  this.pokemonDetailService.detalle$.subscribe(pokemon =>

    this.nombrePokemon=pokemon
    
  )

  }

}



