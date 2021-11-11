import { Chiste } from './Chiste';


export class ServicioChiste{

    chistes: Chiste[];

    constructor(){

        this.chistes = [new Chiste('Que le dice un pez chico a uno grande', 'Pezón'),
                        new Chiste('¿Quien dice tonterias?', 'Los tontos')]
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

    get obtenerChistes(){
        return this.chistes;
    }


}