import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    MatGridListModule ,
    MatCardModule,
    AppMaterialModule,
    MatSidenavModule,
    MatListModule,
    NgChartsModule
  ]
})
export class DashboardModule { 



  
}