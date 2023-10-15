import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aluno } from '../../model/aluno';
import { AlunoService } from '../../services/aluno.service';
import { DatePipe } from '@angular/common';


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

  readonly displayedColumns = ['nome', 'cpf', 'idCourse', 'actions'];

  constructor(private datePipe: DatePipe) { 


  }
  formatarCPF(cpf: string): string {
    if (!cpf) return '';
  
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
  
    if (cpf.length !== 11) return cpf; // Retorna o CPF sem formatação se não tiver 11 dígitos
  
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Formata o CPF
  }
  

  ngOnInit(): void {

   }

  onAdd() {

    this.add.emit(true);
  }

  onEdit(aluno: Aluno) {
    console.log(aluno);

    this.edit.emit(aluno);
  }

  onDelete(aluno: Aluno) {
    this.remove.emit(aluno);
  }
  onExport(aluno: Aluno){
    this.export.emit(aluno);
  }



  
}
