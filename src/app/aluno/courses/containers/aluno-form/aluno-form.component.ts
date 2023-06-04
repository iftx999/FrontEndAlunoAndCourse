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

  alunoForm = this.formBuilder.group({
    idAluno: [''],
    idade: [''],
    responsavel: [''],
    contato: [''],
    nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    cpf: ['', [Validators.required]],
    cursoId: [null, Validators.required] // Adicionado campo para o ID do curso
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: AlunoService,
    private snackBar: MatSnackBar,
    private location: Location,
    private courseService: CoursesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const aluno: Aluno = this.route.snapshot.data['aluno'];
    this.alunoForm.setValue({
      idAluno: aluno.idAluno,
      nome: aluno.nome,
      contato: aluno.contato,
      responsavel: aluno.responsavel,
      cpf: aluno.cpf,
      idade: aluno.idade,
      cursoId: null // Definir valor inicial para o campo do ID do curso
    });

    // Obter lista de cursos para exibir no formulário
    this.courseService.list().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  onSubmit(): void {
    if (this.alunoForm.valid) {
      const dadosAluno = {
        ...this.alunoForm.value
      };

      this.service.save(dadosAluno).subscribe(
        result => this.onSuccess(),
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
    this.snackBar.open('Aluno cadastrado com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao cadastrar aluno.', '', { duration: 5000 });
  }

  getErrorMessage(fieldName: string) {
    // Código para obter mensagens de erro do campo omitido por simplicidade

    return 'Campo Inválido';
  }

  backendWarnError(text: string): void {
    // Código para exibir mensagem de aviso do backend omitido por simplicidade
  }

  onExport(): void {
    // Código para exportar informações do aluno omitido por simplicidade
  }
}