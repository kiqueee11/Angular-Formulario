import { Component } from '@angular/core';
import { InformacionService } from '../services/modales/informacion.service';
import { EnviarPokemonService } from '../services/pokemon/enviar-pokemon.service';
import { Pokemon } from '../services/interfaces/pokemon';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})





export class ModalComponent {
  mostarModal: boolean = true;
  pokemon: Pokemon | null= {
    id:-1,
    nombre:"",
    descripcion:"",
    image_url:""
  }
  constructor(
    private informationService: InformacionService,
    private enviarPokemonService: EnviarPokemonService
  ){}
  ngOnIt(){
      this.enviarPokemonService.info$.subscribe(pokemon =>{
        this.pokemon = pokemon
      })
    
  }

  toggleModal(){
    this.informationService.toggleModal(false);
    this.enviarPokemonService.updatePokemon(null);
  }

}
