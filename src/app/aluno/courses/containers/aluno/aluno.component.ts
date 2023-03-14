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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
  form: FormGroup | any;

  isLoading: boolean = false;

  aluno$: Observable<Aluno[]> | null = null;

  constructor(
    private alunoService: AlunoService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar

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

  ngOnInit(): void {
 
    
    this.form = this._formBuilder.group({
      idAluno: [, [Validators.required]]
      
         })
  }

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


}
