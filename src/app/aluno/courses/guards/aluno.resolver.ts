import { Aluno } from '../model/aluno';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlunoService } from '../services/aluno.service';


@Injectable({
  providedIn: 'root'
})
export class AlunoResolver  {

  constructor(private service: AlunoService) { }

  resolve({ route, state }: { route: ActivatedRouteSnapshot; state: RouterStateSnapshot; }): Observable<Aluno> {
    if (route && route.params && 'id' in route.params) {
      return this.service.loadById(route.params['id']);
    }
    return of<Aluno>({  idAluno: 0, // Defina um valor numérico adequado para idAluno
    nome: '',
    cpf: 0, // Defina um valor numérico adequado para cpf
    idade: 0, // Defina um valor numérico adequado para idade
    contato: '',
    responsavel: '',
    idCourse: { _id: '', name: '', category: '' } });
  }
}
