import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Chiste } from '../Chiste';

@Component({
  selector: 'chiste-form',
  templateUrl: './chiste-form.component.html',
  styleUrls: ['./chiste-form.component.css']
})

export class ChisteFormComponent{

  @Output() crearEventoChiste = new EventEmitter<Chiste>();

  formChiste: FormGroup;

  constructor() {
    this.formChiste = new FormGroup({
      chiste: new FormControl('', [Validators.required, Validators.minLength(6)]),
      respuesta: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  campoInvalido(campo: string){
    return this.formChiste.get(campo)?.invalid && this.formChiste.get(campo)?.touched;
  }

  messageError(campo: string){
    const error = this.formChiste.get(campo)?.errors;

    if( error?.required ){
      return 'El campo es obligatorio';
    }else if(error?.minlength){
      return 'Al menos 6 caracteres';
    }
    return '';
  }

  crearChiste(chiste : string, respuesta: string){  
    if(this.formChiste.invalid){
      this.formChiste.markAllAsTouched();
      return;
    }
    this.crearEventoChiste.emit(new Chiste(chiste, respuesta));
    this.formChiste.reset();
  }
  

}
