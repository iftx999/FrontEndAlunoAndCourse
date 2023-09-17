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
    const idParam = route.params['id'];
  
    if (idParam) {
      return this.service.loadById(idParam);
    } else {
    return of<Professor>({
      idProfessor: 0,
      nameProf: '',
      nascimento: '',
      endereco: '',
      telefone: '',
      email: '',
      salario: 0,
      idSetor: { idSetor: '', nameSetor: '' }
       });
  }
}
}