import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { CinemaService } from './cinema.service';
import { NavigationComponent } from './navigation/navigation.component';
import { TheatreComponent } from './theatre/theatre.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ValueExtractorPipe } from './value-extractor.pipe';
const appRoutes:Routes=[{path:'', component:TheatreComponent},{path:'booking/:id', component:BookingComponent},
{path:'theatre/:id', component:TheatreComponent}, ];
@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    NavigationComponent,
    TheatreComponent,
    ValueExtractorPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot (appRoutes) 
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
