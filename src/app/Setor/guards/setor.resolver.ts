import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Setor } from '../model/setor';
import { SetorService } from '../services/setor.service';

@Injectable({
  providedIn: 'root'
})
export class SetorResolver  {

  constructor(private service: SetorService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Setor> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ _id: '', name: '', category: '' });
  }
}
