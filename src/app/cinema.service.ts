import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TheatrepageWrapper } from './entities/TheatrepageWrapper';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { BookingpageWrapper } from './entities/BookingpageWrapper';
import { Show } from './entities/Show';


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

  getTheatrepageWrapper () {
    let url = 'http://localhost:8090';
    this.http.get<TheatrepageWrapper>(url).subscribe(data =>{

      this.theatreWrapper.next(data);
    });
  }

  getSpecificTheatreWrapper (theatreId:number) {
    let url = 'http://localhost:8090/theatre/'+ theatreId;
    this.http.get<TheatrepageWrapper>(url).subscribe(data =>{

      this.specificTheatreWrapper.next(data);
    });
  }


  getBookingpageWrapper (id:number) {
    let url = 'http://localhost:8090/booking/'+id;
    this.http.get<BookingpageWrapper>(url).subscribe(data =>{
      console.log(data);
      this.bookingWrapper.next(data);
    });
  }
  // getTheatrepageWrapper () : Observable<TheatrepageWrapper>{
  //   let url = 'http://localhost:8090';
  //   return this.http.get<TheatrepageWrapper>(url);
  // }
  makeBooking(id: number, seats: number[]){
    console.log("making booking "+JSON.stringify(seats));
    let url = 'http://localhost:8090/booking/'+id;
   
    this.http.post<number[]>
            (url, JSON.stringify(seats), { headers: new HttpHeaders({'Content-Type':'application/json'})})
            .subscribe(data => data);
  }

  addShow(show:Show) : Observable<Show>{
    console.log("making booking "+JSON.stringify(show));
    let url = 'http://localhost:8090';
   
    return this.http.post<Show>
            (url, JSON.stringify(show ), { headers: new HttpHeaders({'Content-Type':'application/json'})})
            ;
  }
  

}
