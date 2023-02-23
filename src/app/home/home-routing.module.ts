import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesResolver } from './guards/home.resolver';
const routes: Routes = [
  { path: '', component:  },
  { path: 'new', component: , resolve: { course: CoursesResolver } },
  { path: 'edit/:id', component: , resolve: { course: CoursesResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
