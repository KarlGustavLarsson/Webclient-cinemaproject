import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './entities/Movie';

@Pipe({
  name: 'valueExtractor'
})
export class ValueExtractorPipe implements PipeTransform {

  transform(map: Map<number, Movie>): Movie[] {
    let ret = [];

    map.forEach(function(value, key, map){
      ret.push(value);
    });

    return ret;
  }
 

}
