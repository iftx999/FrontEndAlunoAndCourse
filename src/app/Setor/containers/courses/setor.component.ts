import { ConfirmationDialogComponent } from './../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Setor } from '../../model/setor';
import { SetorService } from '../../services/setor.service';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.scss']
})
export class SetorComponent implements OnInit {

  setor$: Observable<Setor[]> | null = null;

  constructor(
    private setorService: SetorService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.setor$ = this.setorService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar setores.');
          return of([])
        })
      );
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

  onEdit(setor: Setor) {
    this.router.navigate(['edit', setor.idSetor], { relativeTo: this.route });
  }

  onRemove(setor: Setor) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse setor?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.setorService.remove(setor.idSetor).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Setor removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover setor.')
        );
      }
    });
  }

}
