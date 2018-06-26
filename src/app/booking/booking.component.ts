import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  
  constructor() {	$(document).ready(
			
    function() {
      $("input.seat").click(
          function() {
            this.clickSeat(parseInt($(this).parent().index()),
                parseInt($(this).index()));
          });
      
      $('#seatsTogheter').click(function(){
        this.resetBooking();
      });		
      this.numberOfSeats = parseInt($('#numberOfSeats').text());
    });
}

  ngOnInit() {


  }
  
  seats = [];
	seatsTogheter;
	numberOfSeats;
	seatArr = [];
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
			$("#seats").val(this.seats);

			$("#seatList").find("input").prop("checked", false);
			//Check if number of seats are within bounds
			if(($('.row').first().children().length >= (col+this.numberOfSeats))){
				
					
				
				$("#seatList").find('[value=' + this.seatArr.join('], [value=') + ']').prop("checked", false);
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
					$("#seats").val(this.seats);
					$("#seatList").find('[value=' + this.seatArr.join('], [value=') + ']').prop("checked", true);
				}


			}
		} else {
			this.seats.push([ row, col ]);
			$("#seats").val(this.seats);
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
		
		//document.getElementById("submitForm").submit();
	}
	

	

}