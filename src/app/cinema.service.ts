import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TheatrepageWrapper } from './entities/TheatrepageWrapper';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { BookingpageWrapper } from './entities/BookingpageWrapper';
import { Show } from './entities/Show';
import { Movie } from './entities/Movie';


@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private theatreWrapper =new BehaviorSubject<TheatrepageWrapper>(null);
  theatreWrapperObservable = this.theatreWrapper.asObservable();

  private specificTheatreWrapper =new BehaviorSubject<TheatrepageWrapper>(null);
  specificTheatreWrapperObservable = this.specificTheatreWrapper.asObservable();

  private bookingWrapper =new BehaviorSubject<BookingpageWrapper>(null);
  bookingWrapperObservable = this.bookingWrapper.asObservable();

  constructor(private http:HttpClient) { }


  get<T>(url: string, subject: BehaviorSubject, modify?: (T) => T){
    this.http.get<T>(url).subscribe(data => {
      if(modify){
        data = modify(data);
      }
      subject.next(data);
    });
  }

  post<T>(url: string, payload: T, httpOptions) : Observable<T>{
    return this.http.post<T>(url, JSON.stringify(payload), httpOptions);
  }

  modify(wrapper: TheatrepageWrapper){
    let movieMap = new Map<number, Movie>();
    wrapper.movies.forEach(item => movieMap.set(item.id, item));
    wrapper.movieMap = movieMap;
    return wrapper;
  }

  getTheatrepageWrapper () {
    let url = 'http://localhost:8090';
    this.get<TheatrepageWrapper>(url, this.theatreWrapper, this.modify);
  }

  getSpecificTheatreWrapper (theatreId:number) {
    let url = 'http://localhost:8090/theatre/'+ theatreId;
    this.get<TheatrepageWrapper>(url, this.specificTheatreWrapper, this.modify);
  }

  getBookingpageWrapper (id:number){
    let url = 'http://localhost:8090/booking/'+id;
    this.get<BookingpageWrapper>(url, this.bookingWrapper);
  }

  makeBooking(id: number, seats: number[]){
    let url = 'http://localhost:8090/booking/'+id;
    this.post<number[]>(url, seats, { headers: new HttpHeaders({'Content-Type':'application/json'})}).subscribe(data => data);
  }

  addShow(show: Show) : Observable<Show>{
    let url = 'http://localhost:8090';
    return this.post<Show>(url, show, { headers: new HttpHeaders({'Content-Type':'application/json'})});
  }

}
