import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Setor } from '../model/setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  private readonly API = 'api/setor';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Setor[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        // tap(courses => console.log(courses))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Setor>(`${this.API}/${id}`);
  }

  save(record: Partial<Setor>) {
     console.log(record);
           console.log('cai aqui antes do if');

    if (record.idSetor) {
      console.log('cai aqui');
      // console.log('update');
      return this.update(record);
    
        }
        console.log('cai aqui create');

    // console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Setor>) {
    return this.httpClient.post<Setor>(this.API, record).pipe(first());
  }

  private update(record: Partial<Setor>) {
    return this.httpClient.put<Setor>(`${this.API}/${record.idSetor}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  getTotalCourse() {
    return this.httpClient.get<number>(`${this.API}/totalCourse`);
  }

  getCourseAll(): Observable<Setor[]>{
    return this.httpClient.get<Setor[]> (`${this.API}}`);
  }

  
}


