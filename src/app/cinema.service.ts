import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TheatrepageWrapper } from './entities/TheatrepageWrapper';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private messageSource =new BehaviorSubject<TheatrepageWrapper>(null);
  currentMessage = this.messageSource.asObservable();

  constructor(private http:HttpClient) { }

  getTheatrepageWrapper () {
    let url = 'http://localhost:8090';
    this.http.get<TheatrepageWrapper>(url).subscribe(data =>{
      console.log("!data!:"+data.movieMap);
      this.messageSource.next(data);
    });
  }
  // getTheatrepageWrapper () {
  //   let url = 'http://localhost:8090';
  //   return this.http.get<TheatrepageWrapper>(url);
  // }
  

}
