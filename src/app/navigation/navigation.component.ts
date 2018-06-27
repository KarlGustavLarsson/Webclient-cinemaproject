import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { TheatrepageWrapper } from '../entities/TheatrepageWrapper';
import { Movie } from '../entities/Movie';
import { Booking } from '../entities/Booking';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  theatrePageWrapper:TheatrepageWrapper;
  success: boolean;
  constructor(public cinemaService:CinemaService) { }

  ngOnInit() {
    this.clickOnNavbar();
  }

  clickOnNavbar(){
    this.cinemaService.getTheatrepageWrapper();
    this.cinemaService.currentMessage.subscribe(data=>{
      
      this.theatrePageWrapper=data;
    
  });
  // this.cinemaService.getTheatrepageWrapper().subscribe( data =>{
  //   this.theatrePageWrapper=data;
  //   });
  }

  getValues(){
    return Object.values(this.theatrePageWrapper.movieMap);
  }
}
