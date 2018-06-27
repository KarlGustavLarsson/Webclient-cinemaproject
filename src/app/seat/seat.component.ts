import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  row: number;
  col: number;
  disabled: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
