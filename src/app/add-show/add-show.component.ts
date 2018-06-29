import { Component, OnInit } from '@angular/core';
import { TheatrepageWrapper } from '../entities/TheatrepageWrapper';
import { CinemaService } from '../cinema.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { Show } from '../entities/Show';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent extends NavigationComponent {

  starttime:string;
  endtime:string;
  theatreId:number;
  movieId:number;
  errorMsg: string = '';
  successMsg: string = '';
  addShow() {
    this.resetErrorMsg();
    this.resetSuccessMsg();
    console.log(this.starttime + " " + this.endtime + " " + this.theatreId + " " + this.movieId);
    let show = new Show();
    show.start = this.starttime;
    show.end = this.endtime;
    show.theatreId = this.theatreId;
    show.movieId = this.movieId;
    this.cinemaService.addShow(show).subscribe(data => this.successMsg="success", error => this.errorMsg = error);
  }

  resetErrorMsg(){
    this.errorMsg='';
  }
  resetSuccessMsg(){
    this.successMsg='';
  }
}