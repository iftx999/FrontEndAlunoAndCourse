import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Professor } from '../../model/professor';
import { Setor } from 'src/app/Setor/model/setor';
import { SetorService } from 'src/app/Setor/services/setor.service';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.scss']
})
export class ProfessorFormComponent implements OnInit {
  setores: Setor[] | undefined;


  professorForm = this.formBuilder.group({
    idProfessor: [0],  // Inicializado com null em vez de 0
    nameProf: [''],   // Inicializado com uma string vazia em vez de null
    nascimento: [''], // Inicializado com uma string vazia em vez de null
    endereco: [''],   // Inicializado com uma string vazia em vez de null
    telefone: [''],   // Inicializado com uma string vazia em vez de null
    email: [''],      // Inicializado com uma string vazia em vez de null
    salario: [0],     // Inicializado com 0 em vez de null
    idSetor: [null]   // Inicializado com null em vez de 
  });
  constructor(
     private formBuilder: FormBuilder,
    private service: ProfessorService,
    private snackBar: MatSnackBar,
    private location: Location,
    private setorService: SetorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const professor: Professor = this.route.snapshot.data['professor'];
    this.professorForm.setValue({
      idProfessor: professor.idProfessor,
      nameProf: professor.nameProf,
      nascimento: professor.nascimento,
      endereco: professor.endereco,
      telefone: professor.telefone,
      email: professor.email,
      salario: professor.salario,
      idSetor: null // Definir valor inicial para o campo do ID do curso
    });

    // Obter lista de cursos para exibir no formulário
    this.setorService.list().subscribe(setores => {
      this.setores = setores;
    });
    console.log(professor);

  }
  
onSubmit(): void {
  if (this.professorForm.valid) {
    const dadosProfessor: Partial<Professor> = {
      idProfessor: this.professorForm.value.idProfessor as number,
      nameProf: this.professorForm.value.nameProf || undefined,
      nascimento: this.professorForm.value.nascimento || undefined,
      endereco: this.professorForm.value.endereco || undefined,
      telefone: this.professorForm.value.telefone || undefined,
      email: this.professorForm.value.email || undefined,
      salario: this.professorForm.value.salario || undefined,
      idSetor: this.professorForm.value.idSetor || undefined,
    };

    this.service.save(dadosProfessor).subscribe(
      () => this.onSuccess(),
      error => this.onError()
    );
  } else {
    // Exiba uma mensagem de erro ou tome a ação apropriada se o formulário for inválido
  }
}


onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar aluno.', '', { duration: 5000 });
  }

  getErrorMessage(fieldName: string) {
    const field = this.professorForm.get(fieldName);

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




}