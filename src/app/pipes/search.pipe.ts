import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../models/characters';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(character: Result[], texto: string): any[] {
    if (!texto) return character
    return character.filter(char => char.name.toUpperCase().includes(texto.toUpperCase()))
  }

}
