import { Theatre } from "./Theatre";
import { Show } from "./Show";
import { Movie } from "./Movie";

export interface TheatrepageWrapper {

    theatres:Theatre[];
    shows:Show[];
    movieMap:{ [id: number]: Movie };
    totalSeatsTaken:number[];

}