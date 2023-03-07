import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  escola = {
    nome: 'Escola de Teste',
    endereco: 'Rua dos Testes, 123',
    telefone: '11 1234-5678',
    email: 'teste@gmail.com'
  }
  

}
