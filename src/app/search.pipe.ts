import { Pipe, PipeTransform } from '@angular/core';
import { Show } from './entities/Show';
import { TheatrepageWrapper } from './entities/TheatrepageWrapper';
import { Movie } from './entities/Movie';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(shows: Show[], wrapper: TheatrepageWrapper, searchString: string, searchProperties: string[]): any {
    if(searchString === ""){
      return shows;
    }
    searchString = searchString.toLowerCase();

    let movies = wrapper.movies.filter(item => {
      return searchProperties.some(prop => (item[prop].toLowerCase().search(searchString) !== -1));
    });
    let filteredShows = shows.filter(item => {
      return movies.some(movie => (movie.id === item.movieId));
    });
    return filteredShows;
  }

}
