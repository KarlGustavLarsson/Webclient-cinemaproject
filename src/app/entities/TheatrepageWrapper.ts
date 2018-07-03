import { Theatre } from "./Theatre";
import { Show } from "./Show";
import { Movie } from "./Movie";

export interface TheatrepageWrapper {

    theatres:Theatre[];
    shows:Show[];
    movies:Movie[];
    movieMap: Map<number, Movie>;
    totalSeatsTaken:{[id: number]: number};

}