import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlunoListComponent } from './components/aluno-list/aluno-list.component';
import { AlunoComponent } from './containers/aluno/aluno.component';
import { AlunoFormComponent } from './containers/aluno-form/aluno-form.component';
import { AlunoRoutingModule } from './aluno-routing.module';

@NgModule({
  declarations: [
    AlunoComponent,
    AlunoFormComponent,
    AlunoListComponent
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AlunoModule { }
