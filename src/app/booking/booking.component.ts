import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CinemaService } from '../cinema.service';
import { BookingpageWrapper } from '../entities/BookingpageWrapper';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
	
	bookingpageWrapper: BookingpageWrapper;
	seats = [];
	seatsTogheter;
	numberOfSeats;
	seatArr = [];

  constructor(private cinemaService:CinemaService, private route: ActivatedRoute) {	
		
}

  ngOnInit() {
		const id = +this.route.snapshot.paramMap.get('id');
		this.cinemaService.getBookingpageWrapper(id);
		this.cinemaService.bookingWrapperObservable
						.subscribe(data => this.bookingpageWrapper = data,
											 error => console.log(error));
		
	}
	
	ngAfterViewInit(){
		// $(document).ready(	
		// 	function() {
			
				
				// $('#seatsTogheter').click(function(){
				// 	this.self.resetBooking();
				// });		
		this.numberOfSeats = parseInt($('#numberOfSeats').text());
	// 		});
	}

	getMapKey(row: number, col: number){
		
		return "row"+row+"col"+col;
		
		
	}
  getArray(max: number) {
		let arr = [];

    for (let i = 0; i < max; i++) {
      arr[i]=i;
    }
    return arr;
  }
  
	increase() {

	  var el = parseInt($('#numberOfSeats').text());
	  $('#numberOfSeats').text(el+1);
	  this.numberOfSeats =el+1;
	}
	
	decrease() {
		
	 var el = parseInt($('#numberOfSeats').text());
	 if(el > 1){
	  $('#numberOfSeats').text(el-1); 
    this.numberOfSeats =el-1;
	 }
	}

	clickSeat(row, col) {

		this.seatsTogheter = $('#seatsTogheter:checked').val();
		
		if(this.seatsTogheter){
			
			this.seats = [];

			$("#seatList").find("input").prop("checked", false);
			//Check if number of seats are within bounds
			if(($('.row').first().children().length >= (col+this.numberOfSeats))){
				
					
				let seatString = '[value=' + this.seatArr.join('], [value=') + ']';
				$("#seatList.input").find(seatString).prop("checked", false);
				var nextCol;
				var nextRow;
				this.seatArr = [];
				this.seats = [];
				//Creates indexes for seats to select
				for(var i = 0; i < this.numberOfSeats; i++){
					nextCol = col+i;
					this.seatArr.push(row+""+nextCol);
					this.seats.push([row, nextCol]);
				}
				var seatsSelected = $("#seatList").find('[value=' + this.seatArr.join('], [value=') + ']');

				var disabled = $(seatsSelected).filter(function( index ) {
						    return $( this ).attr( "id" ) === "disabled";
							}).length;
				
				if(disabled === 0){
					
					$("#seatList").find('[value=' + this.seatArr.join('], [value=') + ']').prop("checked", true);
				}


			}
		} else {
			this.toggleSeat(row, col);
			
			
		}
		
	}
	toggleSeat(row, col){
		let i = 0;
		let remove = false;
		for(i = 0; i < this.seats.length; i++){
			let currentRow = this.seats[i][0];
			let currentCol = this.seats[i][1];
			if(currentRow == row && currentCol == col){
				remove = true;
				break;
			}
		}
		if(remove){
			this.seats.splice(i,1);
		} else {
			this.seats.push([ row, col ]);
		}

	}
	resetBooking(){
		$("#seatList").find("[type=checkbox]").prop("checked", false);
		this.seats = [];
	}
	
	canMakeBooking(){
		if(this.seats.length == 0){
			alert("Can't book 0 seats");
			return;
		}
		let arr = [];
    for(let i = 0; i < this.seats.length; i++){
			arr.push(this.seats[i]);
    }
		console.log("sending booking "+this.seats);
		const id = +this.route.snapshot.paramMap.get('id');
		this.cinemaService.makeBooking(id, arr);
		// (<HTMLFormElement>document.getElementById("submitForm")).submit();
	}
	

	

}