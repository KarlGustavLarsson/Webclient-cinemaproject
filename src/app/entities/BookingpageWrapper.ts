import { Theatre } from "./Theatre";
import { Show } from "./Show";
import { Movie } from "./Movie";
import { Ticket } from "./Ticket";

export class BookingpageWrapper {

    theatres:Theatre [];
    show:Show;
    movie:Movie;
    ticketMap:Map <string, Ticket>;

}