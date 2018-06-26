import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { TheatrepageWrapper } from '../entities/TheatrepageWrapper';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {

  theatrePageWrapper:TheatrepageWrapper;

  constructor(public cinemaService:CinemaService) { }

  ngOnInit() {

    this.cinemaService.currentMessage.subscribe(data=>{

      this.theatrePageWrapper=data;
    });
    // this.cinemaService.getTheatrepageWrapper().subscribe(data=>{

    //   this.theatrePageWrapper=data;
    // });
  }

}
