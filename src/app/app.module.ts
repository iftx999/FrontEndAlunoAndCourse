import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxMaskModule } from 'ngx-mask';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    FullCalendarModule,
    AppMaterialModule,
    MatSidenavModule,
    MatListModule,
    NgxMaskModule,
    NgChartsModule,
    NgxMaskModule.forRoot()

    
    
  ],
  providers: [  DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }