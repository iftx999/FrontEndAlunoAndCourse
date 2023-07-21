import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProfessorListComponent } from './components/courses-list/professor-list.component';
import { ProfessorFormComponent } from './containers/course-form/professor-form.component';
import { ProfessorComponent } from './containers/courses/professor.component';
import { ProfessorRoutingModule } from './professor-routing.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    ProfessorComponent,
    ProfessorFormComponent,
    ProfessorListComponent
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule
  ]
})
export class ProfessorModule { }
