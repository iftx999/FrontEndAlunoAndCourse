import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Aluno } from './../../model/aluno';
import { AlunoService } from '../../services/aluno.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
  isLoading: boolean = false;

  aluno$: Observable<Aluno[]> | null = null;
  form: FormGroup | undefined;

  constructor(
    private alunoService: AlunoService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {

    this.aluno$ = this.alunoService.list()
    
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar aluno.');
          return of([])
        })
      );
      console.log(this.aluno$);

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(aluno: Aluno) {
    this.router.navigate(['edit', aluno.idAluno], { relativeTo: this.route });
  }

  onRemove(aluno: Aluno) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse aluno?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.alunoService.remove(aluno.idAluno).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Aluno removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover aluno.')
        );
      }
    });
  }

  backendWarnError(text: string): void {
    this._snackBar.open(text, 'X', {
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['warning']
    });
  }
  exportarPdf(): void {
    this.isLoading = true;
    let formObj = this.form.getRawValue();
    this.alunoService.getRelAluno(formObj.aluno.idAluno, new Date(formObj.dataInicial), new Date(formObj.dataFinal))
      .subscribe(file => {
        this.alunoService.saveAs(file, 'Relatório de Comissão');
        this.isLoading = false;
      },
        (err) => {
          this.backendWarnError("A consulta não retornou nenhum dado.");
          this.isLoading = false;
        });
  }

}
