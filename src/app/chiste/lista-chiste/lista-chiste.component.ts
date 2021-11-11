import { Component } from '@angular/core';
import { Chiste } from '../Chiste';
import { ServicioChiste } from '../ServicioChiste';

@Component({
  selector: 'lista-chiste',
  templateUrl: './lista-chiste.component.html',
})

export class ListaChisteComponent{

  servicio = new ServicioChiste();

  chistes: Chiste[];

  constructor(){
    this.chistes = this.servicio.chistes;
    console.log(this.chistes);
    
  }

  agregarChiste(chiste: Chiste){
    this.servicio.agregarChiste(chiste);
  }

  chisteEliminar(chiste: Chiste){
    this.servicio.eliminarChiste(chiste);
  }

}
