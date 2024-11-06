import { Component } from '@angular/core';
import {Pokemon} from "../services/interfaces/pokemon";
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

  pokemon: Pokemon[] = [

    {id: 1, nombre: "Goldengo",descripcion:"Acero,fantasma",image_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zDjld4MhHQcPYCkcSSn_KAHaHa%26pid%3DApi&f=1&ipt=bf52843426b3642d720cba6b88f0f3501e5bcdc81878127b0e278de5428b7dfc&ipo=images"},
    {id: 2, nombre: "Metagros",descripcion:"Acero,psiquico",image_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xvis4IPB3PMgWd2V6X2FwgHaG1%26pid%3DApi&f=1&ipt=868b6833b0c968a4bed226d916117921f85fa411fe75a18401b791d360635908&ipo=images"},
    {id: 3, nombre: "Corvinight",descripcion:"Acero,volador",image_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wikidexcdn.net%2Fmwuploads%2Fwikidex%2Fthumb%2F2%2F2e%2Flatest%2F20200307053132%2FCorviknight.png%2F1200px-Corviknight.png&f=1&nofb=1&ipt=7c608fe3882fab16dfb1befaa0c90064f6446df8d60039bba8dfdf82908791b3&ipo=images"},
    {id: 4, nombre: "Snorlax",descripcion:"Normal",image_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.l7JGflUfCSa5atFWZZ4YbgHaF6%26pid%3DApi&f=1&ipt=020b1e139a4dcfb2a8092d90b7270a6d601c8970c42a61c1c0fcd25b18c30704&ipo=images"},
    {id: 5, nombre: "Tandemaus",descripcion:"Normal",image_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.J3g6qYfCslZRIKa9Kf4m2gHaEP%26pid%3DApi&f=1&ipt=ace3c228a7badcc69d4eea91525b884323706eb5b94d87b3ebcbe281e8e0c4d1&ipo=images"},
    


  ]

}
