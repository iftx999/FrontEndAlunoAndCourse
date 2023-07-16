import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showCadastro: boolean = false;

  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
  toggleCadastro() {
    this.showCadastro = !this.showCadastro;
  }
}
