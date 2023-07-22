import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppCalendar } from './app.calendar';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AppCalendar
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
