import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Professor } from '../model/professor'; 
import { delay, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private readonly API = 'api/professores';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Professor[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        // tap(courses => console.log(courses))
      );
  }

  loadById(id: number) {
    return this.httpClient.get<Professor>(`${this.API}/${id}`);
  }


  save(record: Partial<Professor>) {
    // console.log(record);
    if (record.idProfessor) {
      // console.log('update');
      return this.update(record);
    }
    // console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Professor>) {
    return this.httpClient.post<Professor>(this.API, record).pipe(first());
  }

  private update(record: Partial<Professor>) {
    return this.httpClient.put<Professor>(`${this.API}/${record.idProfessor}`, record).pipe(first());
  }

  remove(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }




  
}


