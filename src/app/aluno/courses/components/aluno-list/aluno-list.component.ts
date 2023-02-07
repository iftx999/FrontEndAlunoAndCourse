import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Aluno } from '../../model/aluno';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  @Input() aluno: Aluno[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'cpf', 'actions'];

  constructor() { }

  ngOnInit(): void { }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(aluno: Aluno) {
    this.edit.emit(aluno);
  }

  onDelete(aluno: Aluno) {
    this.remove.emit(aluno);
  }

}
