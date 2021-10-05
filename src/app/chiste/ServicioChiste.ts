import { Chiste } from './Chiste';


export class ServicioChiste{

    chistes: Chiste[];

    constructor(){

        this.chistes = [new Chiste('Que le dice un pez chico a uno grande', 'Pezón')]
    }

    agregarChiste(chiste: Chiste){

        this.chistes.push(chiste);  
    
    }

    eliminarChiste(chiste: Chiste){

        let indice = this.chistes.indexOf(chiste);
    
        if (indice !== -1) {
          this.chistes.splice(indice, 1);
        }

    }

}