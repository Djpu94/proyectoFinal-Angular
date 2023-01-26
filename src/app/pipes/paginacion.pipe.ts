import { Result } from './../models/characters';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginacion'
})
export class PaginacionPipe implements PipeTransform {

  transform(characters: Result[], page: number = 0): Result[] {
    return characters.slice(page, page + 12);
  }

}
