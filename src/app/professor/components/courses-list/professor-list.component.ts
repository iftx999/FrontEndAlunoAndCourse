import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Professor } from '../../model/professor';
@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {

  @Input() professores: Professor[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['nameProf', 'email', 'nascimento','actions'];

  constructor(private datePipe: DatePipe) { }

  formatDate(date: string): string {
    if (date) {
      return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
    }
    return '';
  }

  ngOnInit(): void { }


  onAdd() {
    this.add.emit(true);
  }

  onEdit(professores: Professor) {
    this.edit.emit(professores);
  }

  onDelete(professores: Professor) {
    this.remove.emit(professores);
  }
  

}
