import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCalendar } from './app.calendar';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    AppCalendar
  ],
  imports: [
    BrowserModule,
    FullCalendarModule

    
  ],
  providers: [],
  bootstrap: [AppCalendar]
})
export class AppClandarModule { }
