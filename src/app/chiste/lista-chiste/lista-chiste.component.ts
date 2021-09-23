import { Component } from '@angular/core';
import { Chiste } from '../Chiste';

@Component({
  selector: 'lista-chiste',
  templateUrl: './lista-chiste.component.html',
})

export class ListaChisteComponent{

  chistes: Chiste[];

  constructor(){
    this.chistes = [
      new Chiste('Que le dice un pez chico a uno grande', 'Pezón'),
    ]

  }

  agregarChiste(chiste: Chiste){
    this.chistes.push(chiste);    
    
  }

  chisteEliminar(chiste: Chiste){

    let indice = this.chistes.indexOf(chiste);

    if (indice !== -1) {
      this.chistes.splice(indice, 1);
    }
    
  }

}
