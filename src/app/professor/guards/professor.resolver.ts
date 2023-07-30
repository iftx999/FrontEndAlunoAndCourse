import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Professor } from '../model/professor';
import { AlunoService } from 'src/app/aluno/courses/services/aluno.service';
import { ProfessorService } from '../services/professor.service';
@Injectable({
  providedIn: 'root'
})
export class ProfessorResolver  {

  constructor(private service: ProfessorService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Professor> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({
      idProfessor: '',
      nameProf: '',
      nascimento: '',
      endereco: '',
      telefone: '',
      email: '',
      salario: '',
      idSetor: { idSetor: '', nameSetor: '' }
       });
  }
}
