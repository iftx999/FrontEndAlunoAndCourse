import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../../model/aluno';
import { Course } from 'src/app/courses/model/course';

import { AlunoService } from '../../services/aluno.service';
import { CoursesService } from 'src/app/courses/services/courses.service';
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  totalAluno: number = 0;
  cursos: Course[] | undefined;






  isLoading: boolean = false;


  form = this.formBuilder.group({
     idAluno: [''],
    idade: [''],
    responsavel: [''],
    contato: [''],
    nome: ['', [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(100)]],
    cpf: ['', [Validators.required]],
    curso: [''],

   

  });



  constructor(private formBuilder: NonNullableFormBuilder,
    private service: AlunoService,
    private snackBar: MatSnackBar,
    private location: Location,
    private courseService: CoursesService,
    private route: ActivatedRoute) {

    let cursos = this.cursos;
      cursos = this.courseService.getCourseAll(); 


  }



  ngOnInit(): void {
    

   
  
    const aluno: Aluno = this.route.snapshot.data['aluno'];
    this.form.setValue({
      idAluno: aluno.idAluno,
      nome: aluno.nome,
      contato: aluno.contato,
      responsavel: aluno.responsavel,
      cpf: aluno.cpf,
      idade: aluno.idade,
      curso: aluno.curso,

      
   
    });
  }

  

  onSubmit(): void {
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
            this.service.saveAs(file, 'Informação do Aluno');
        this.isLoading = false;
            },
        (err) => {
          this.backendWarnError("A consulta não retornou nenhum dado.");
          this.isLoading = false;
        });
  }


}



 

