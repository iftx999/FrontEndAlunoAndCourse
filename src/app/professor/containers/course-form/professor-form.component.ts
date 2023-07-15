import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProfessorService } from '../../services/professor.service';
import { Professor } from '../../model/professor';
@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.scss']
})
export class ProfessorFormComponent implements OnInit {

  form = this.formBuilder.group({
    idProfessor: [''],
    nameProf: ['', [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(100)]],
    nascimento: ['', [Validators.required]],
    endereco:  ['', [Validators.required]],
    telefone:  ['', [Validators.required]],
    email:  ['', [Validators.required]],
    salario:  ['', [Validators.required]],


  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ProfessorService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    //this.form
  }

  ngOnInit(): void {
    const professor: Professor = this.route.snapshot.data['professor'];
    this.form.setValue({
      idProfessor: professor.idProfessor,
      nameProf: professor.nameProf ,
      nascimento: professor.nascimento,
      endereco: professor.endereco,
      telefone: professor.telefone,
      email: professor.email,
      salario:professor.salario,
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
    this.snackBar.open('Funcionario salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar funcionario.', '', { duration: 5000 });
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
}
