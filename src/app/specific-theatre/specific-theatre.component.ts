import { Component, OnInit } from '@angular/core';
import { TheatreComponent } from '../theatre/theatre.component';
import { CinemaService } from '../cinema.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-theatre',
  templateUrl: '../theatre/theatre.component.html',
  styleUrls: ['../theatre/theatre.component.css']
})
export class SpecificTheatreComponent extends TheatreComponent{

  constructor( private route: ActivatedRoute , public cinemaService:CinemaService, public router: Router) {	
    super(cinemaService,router);
		
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cinemaService.getSpecificTheatreWrapper(params['id']);
      this.cinemaService.specificTheatreWrapperObservable.subscribe(data=>{

        this.theatrePageWrapper=data;

      });
    });
  }

}
