import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { TheatrepageWrapper } from '../entities/TheatrepageWrapper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {

  theatrePageWrapper:TheatrepageWrapper;
  searchString: string = "";
  searchProperties = ['name', 'description'];
  constructor(public cinemaService:CinemaService, public router: Router) { }

  ngOnInit() {
    this.cinemaService.getTheatrepageWrapper();
    this.cinemaService.theatreWrapperObservable.subscribe(data=>{

      this.theatrePageWrapper=data;
    });

  }
  onSubmit(id: number){
    console.log(id);
    this.router.navigate(['/booking/'+id]);
  }

}
