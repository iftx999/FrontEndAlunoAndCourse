import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';


import { SetorListComponent } from './components/setor-list/setor-list.component';
import { SetorComponent } from './containers/courses/setor.component';
import { SetorFormComponent } from './containers/setor-form/setor-form.component';
import { SetorRoutingModule } from './setor-routing.module';
@NgModule({
  declarations: [
    SetorComponent,
    SetorFormComponent,
    SetorListComponent
  ],
  imports: [
    CommonModule,
    SetorRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SetorModule { }
