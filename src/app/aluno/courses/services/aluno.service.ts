import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver';

import { Aluno } from '../model/aluno';
import { delay, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private readonly API = 'api/aluno';

  constructor(private httpClient: HttpClient) {
    
   }

   saveAs(file: Blob, name: string): void {
    FileSaver.saveAs(file, name);
  }

 
  list() {
    return this.httpClient.get<Aluno[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        // tap(courses => console.log(courses))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Aluno>(`${this.API}/${id}`);
  }

  save(record: Partial<Aluno>) {
    // console.log(record);
    if (record.idAluno) {
      // console.log('update');
      return this.update(record);
    }
    // console.log('create');
    return this.create(record);
  }
  

  private create(record: Partial<Aluno>) {
    return this.httpClient.post<Aluno>(this.API, record).pipe(first());
  }

  private update(record: Partial<Aluno>) {
    return this.httpClient.put<Aluno>(`${this.API}/${record.idAluno}`, record).pipe(first());
  }

  remove(idAluno: string) {
    return this.httpClient.delete(`${this.API}/${idAluno}`).pipe(first());
  }

  getRelAluno(idAluno: string): Observable<any> {
    return this.httpClient.get(`${this.API}/relAluno/${idAluno}`, { responseType: 'blob' });
  }

  getTotalAlunos() {
    return this.httpClient.get<number>(`${this.API}/totalAluno`);
  }
}
