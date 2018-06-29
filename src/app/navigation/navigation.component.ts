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
  modalShown = false;

  constructor(public cinemaService:CinemaService) { }

  ngOnInit() {
    this.clickOnNavbar();
  }

  clickOnNavbar(){
    this.cinemaService.getTheatrepageWrapper();
    this.cinemaService.theatreWrapperObservable.subscribe(data=>{
      
      this.theatrePageWrapper=data;
    
  });
  // this.cinemaService.getTheatrepageWrapper().subscribe( data =>{
  //   this.theatrePageWrapper=data;
  //   });
  }

  clickOnPopup(){
    this.clickOnNavbar();
    this.togglePopup();
  }

  togglePopup(){
    this.modalShown = !this.modalShown;
  }

  getValues(){
    return Object.values(this.theatrePageWrapper.movieMap);
  }
}
