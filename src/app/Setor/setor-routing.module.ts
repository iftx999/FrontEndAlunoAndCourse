import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetorResolver } from './guards/setor.resolver';
import { SetorComponent } from './containers/courses/setor.component';
import { SetorFormComponent } from './containers/setor-form/setor-form.component';
const routes: Routes = [
  { path: '', component: SetorComponent },
  { path: 'new', component: SetorFormComponent, resolve: { setor: SetorResolver } },
  { path: 'edit/:id', component: SetorFormComponent, resolve: { setor: SetorResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetorRoutingModule { }
