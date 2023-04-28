import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aluno } from '../../model/aluno';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent implements OnInit {

  form: FormGroup | any;

  isLoading: boolean = false;

  @Input() aluno: Aluno[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);
  @Output() export = new EventEmitter(false); 

  readonly displayedColumns = ['nome', 'cpf', 'idade', 'contato', 'responsavel', 'tipoCourse', 'actions'];

  constructor() { 


  }

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
  onExport(aluno: Aluno){
    this.export.emit(aluno);
  }

  
}
