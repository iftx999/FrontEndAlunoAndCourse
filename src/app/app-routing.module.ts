import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dash' },
  { path: '', pathMatch: 'full', redirectTo: 'aluno' },
  { path: '', pathMatch: 'full', redirectTo: 'courses' },

  {
    
    path: 'dash',
    loadChildren: () => import('./dashboard/dash.module').then(y => y.DashModule),
 
   
  },
  {
    
    path: 'aluno',
    loadChildren: () => import('./aluno/courses/aluno.module').then(z => z.AlunoModule),
 
   
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
