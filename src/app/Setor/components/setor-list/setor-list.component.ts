import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Setor } from '../../model/setor';

@Component({
  selector: 'app-setor-list',
  templateUrl: './setor-list.component.html',
  styleUrls: ['./setor-list.component.scss']
})
export class SetorListComponent implements OnInit {

  @Input() setor: Setor[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['nameSetor', 'actions'];

  constructor() { }

  ngOnInit(): void { }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(setor: Setor) {
    this.edit.emit(setor);
  }

  onDelete(setor: Setor) {
    this.remove.emit(setor);
  }
  

}
