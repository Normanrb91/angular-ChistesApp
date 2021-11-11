import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {

  transform(value: string, param: string): string {

    let insultos = param.split(', ');
    
    let resultado = value;

    insultos.forEach(insulto => {

      if(resultado.indexOf(insulto) > 0){
        resultado = resultado.replace(insulto, '******');
      } 
    });

    return resultado;
  }

}
