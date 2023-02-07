import { Aluno } from '../model/aluno';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlunoService } from '../services/aluno.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoResolver implements Resolve<Aluno> {

  constructor(private service: AlunoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aluno> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ idAluno: '', nome: '', cpf: '',  idade:'' });
  }
}
