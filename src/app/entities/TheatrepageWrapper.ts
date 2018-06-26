import { Theatre } from "./Theatre";
import { Show } from "./Show";
import { Movie } from "./Movie";

export class TheatrepageWrapper {

    theatres:Theatre[];
    shows:Show[];
    movieMap:Map<number, Movie>;
    totalSeatsTaken:number[];

}