import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { TheatrepageWrapper } from '../entities/TheatrepageWrapper';

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
    // this.cinemaService.currentMessage.subscribe(data=>{
      
    //     this.theatrePageWrapper=data;
      
    // });
  }

  clickOnNavbar(){
    this.cinemaService.getTheatrepageWrapper();
    this.cinemaService.currentMessage.subscribe(data=>{
      
      this.theatrePageWrapper=data;
    
  });
  // this.cinemaService.getTheatrepageWrapper().subscribe(data=>{
    
  //   this.theatrePageWrapper=data;
  //   console.log(this.theatrePageWrapper.theatres);
  // });
  }

  getWrapper(){
    if(this.theatrePageWrapper == null){
      this.clickOnNavbar();
    }
    return this.theatrePageWrapper.movieMap;
  }
}
