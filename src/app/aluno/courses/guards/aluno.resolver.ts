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

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aluno> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ idAluno: '', nome: '', cpf: '', idade: '', contato: '', responsavel: '', cursoID: { _id: '', name: '', category: '' } });
  }
}
