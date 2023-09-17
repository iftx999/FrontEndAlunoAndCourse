import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorComponent } from './containers/professor/professor.component';
import { ProfessorFormComponent } from './containers/course-form/professor-form.component';
import { ProfessorResolver } from './guards/professor.resolver';

const routes: Routes = [
  { path: '', component: ProfessorComponent },
  { path: 'new', component: ProfessorFormComponent, resolve: { professor: ProfessorResolver } },
  { path: 'edit/:id', component: ProfessorFormComponent, resolve: { professor: ProfessorResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
