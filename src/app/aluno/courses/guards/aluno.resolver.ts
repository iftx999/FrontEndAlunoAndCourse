import { Aluno } from '../model/aluno';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlunoService } from '../services/aluno.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoResolver {

  constructor(private service: AlunoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aluno> {
    const idParam = route.params['id'];

    if (idParam) {
      return this.service.loadById(idParam);
    } else {
      return of<Aluno>({
        idAluno: 0, // Defina um valor numérico adequado para idAluno
        nome: '',
        cpf: 0, // Defina um valor numérico adequado para cpf
        idade: 0, // Defina um valor numérico adequado para idade
        contato: '',
        responsavel: '',
        idCourse: { _id: '', name: '', category: '' }
      });
    }
  }
}