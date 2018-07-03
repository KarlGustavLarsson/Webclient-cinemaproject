import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { CinemaService } from './cinema.service';
import { NavigationComponent } from './navigation/navigation.component';
import { TheatreComponent } from './theatre/theatre.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddShowComponent } from './add-show/add-show.component';
import { SpecificTheatreComponent } from './specific-theatre/specific-theatre.component';
import { SearchPipe } from './search.pipe';
const appRoutes:Routes=[{path:'', component:TheatreComponent},{path:'booking/:id', component:BookingComponent},
{path:'theatre/:id', component:SpecificTheatreComponent}, ];
@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    NavigationComponent,
    TheatreComponent,
    AddShowComponent,
    SpecificTheatreComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot (appRoutes) , FormsModule
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
