import { Component, EventEmitter, Output } from '@angular/core';
import { Chiste } from '../Chiste';

@Component({
  selector: 'chiste-form',
  templateUrl: './chiste-form.component.html',
})

export class ChisteFormComponent {

  @Output() crearEventoChiste = new EventEmitter<Chiste>();

  chiste    = '';
  respuesta = '';

  crearChiste(){

    if(this.chiste.trim().length === 0 || this.respuesta.trim().length === 0){return}
  
    this.crearEventoChiste.emit(new Chiste(this.chiste, this.respuesta));

    this.chiste    = '';
    this.respuesta = '';

  }

}
