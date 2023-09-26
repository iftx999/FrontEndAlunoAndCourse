import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlunoService } from '../aluno/courses/services/aluno.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { CoursesService } from '../courses/services/courses.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  
  quantidadeAlunos: number | undefined;

  quantidadeCourse: number | undefined;
  public barChartLabels:string[] = ['2014', '2015', '2016'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
      {data: [32131, 3432, 543], label:'Test 1'},
      {data: [54353, 432, 768], label:'Test 2'}
  ];



  escola = {
    nome: 'Escola de Teste',
    endereco: 'Rua dos Testes, 123',
    telefone: '11 1234-5678',
    email: 'teste@gmail.com'
  }

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: AlunoService,
    private courseService: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    //this.form
  }

  ngOnInit(): void {
    
      this.service.getTotalAlunos()
      .subscribe(quantidade => {
        this.quantidadeAlunos = quantidade;
      });

        this.courseService.getTotalCourse()
      .subscribe(quantidadeC => {
        this.quantidadeCourse = quantidadeC;
      });
      this.service.getTotalAlunos().subscribe((data: number) => {
        // Verifique se os dados são um array e contêm elementos
        if (Array.isArray(data) && data.length > 0) {
          // Processar os dados recebidos do backend e atribuir às variáveis do gráfico
          this.barChartLabels = data.map(item => item.label);
          this.barChartData[0].data = data.map(item => item.value);
        } else {
          // Trate o caso em que os dados estão vazios ou não são um array válido
          console.error('Dados inválidos recebidos do servidor.');
        }
      });
      
  }
  
}

