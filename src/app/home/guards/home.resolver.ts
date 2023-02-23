import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Course } from '../model/home';
import { CoursesService } from '../services/home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<Course> {

  constructor(private service: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ _id: '', name: '', category: '' });
  }
}
