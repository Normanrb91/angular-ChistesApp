

export class Chiste {

    chiste: string;
    respuesta: string;
    oculto: boolean;

    constructor(chiste: string, respuesta: string) {
        this.chiste = chiste;
        this.respuesta = respuesta;
        this.oculto = true;
    }

    toggle(){
        this.oculto = !this.oculto;
    }


}