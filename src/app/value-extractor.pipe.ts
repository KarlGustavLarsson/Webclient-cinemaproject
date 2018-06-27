import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './entities/Movie';

@Pipe({
  name: 'valueExtractor'
})
export class ValueExtractorPipe implements PipeTransform {

  transform(map: Map<number, Movie>): Movie[] {
    let ret: Movie[] = [];
    // if(!map){
      map.forEach((value, key) =>
        ret.push(value)
      );
    // }
  
    return ret;
  }
 

}
