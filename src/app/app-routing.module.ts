import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    
    path: 'aluno',
    loadChildren: () => import('./aluno/courses/aluno.module').then(z => z.AlunoModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
 },
 {
  path: 'professores',
  loadChildren: () => import('./professor/professor.module').then(g => g.ProfessorModule),
},
{
  path: 'setor',
  loadChildren: () => import('./Setor/setor.module').then(g => g.SetorModule),
},

{
  path: 'calendar',
  loadChildren: () => import('./calendar/calendar.module').then(y => y.AgendaModule),
},

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  