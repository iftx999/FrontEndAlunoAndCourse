import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppCalendar } from './app.calendar';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar';



const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  }
];



@NgModule({
  declarations: [
    AppCalendar
  

  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    RouterModule.forChild(routes)

  ],
  providers: [],
  bootstrap: [AppCalendar]
})
export class AgendaModule { }
