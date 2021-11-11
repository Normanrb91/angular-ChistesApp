import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Chiste } from '../Chiste';

@Component({
  selector: 'card-chiste',
  templateUrl: './card-chiste.component.html',
})

export class CardChisteComponent  {

  @Input('chiste') data!: Chiste;
  @Output() eliminarChiste = new EventEmitter<Chiste>();

  eliminarItem(){
    this.eliminarChiste.emit(this.data); 
  }

}
