import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../../model/aluno';

import { AlunoService } from '../../services/aluno.service';
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {


  isLoading: boolean = false;


  form = this.formBuilder.group({
     idAluno: [''],
    idade: [''],
    nome: ['', [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(100)]],
    cpf: ['', [Validators.required]]
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: AlunoService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    //this.form
  }

  ngOnInit(): void {
    const aluno: Aluno = this.route.snapshot.data['aluno'];
    this.form.setValue({
      idAluno: aluno.idAluno,
      nome: aluno.nome,
      cpf: aluno.cpf,
      idade: aluno.idade,
    });
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }

    return 'Campo Inválido';
  }
  backendWarnError(text: string): void {
    this.snackBar.open(text, 'X', {
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['warning']
    });
  }

  onExport(): void {
    this.isLoading = true;
    let formObj = this.form.getRawValue();
    this.service.getRelAluno(formObj.idAluno)
          .subscribe(file => {
            this.service.saveAs(file, 'Termo de Responsabilidade');
        this.isLoading = false;
            },
        (err) => {
          this.backendWarnError("A consulta não retornou nenhum dado.");
          this.isLoading = false;
        });
  }


 
}
