import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlunoService } from '../aluno/courses/services/aluno.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { CoursesService } from '../courses/services/courses.service';
import { Chart } from 'chart.js';
import { ProfessorService } from '../professor/services/professor.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  professor: any[] = [];
  
  quantidadeAlunos: number | undefined;

  quantidadeCourse: number | undefined;
  public barChartLabels:string[] = ['Salário', 'Salário', 'Salário'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
      {data: [32131, 3432, 543], label:'Colaborador 1'},
      {data: [54353, 432, 768], label:'Colaborador 2'}
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
    private profService: ProfessorService,
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
      this.profService.list().subscribe((data: any[]) => {
        console.log("cai aqui no list ");
        this.professor = data;
        this.createBarChart();
      });
    }
  
  
    createBarChart(): void {
      console.log("cai no create bar chart");

      // Código para criar o gráfico de barras usando Chart.js
        const canvas = document.getElementById('barChart') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
      
        const nome = this.professor.map(professor=> professor.nameProf);
        const salario = this.professor.map(professor => professor.salario);
        console.log(nome);
        console.log(salario);
        if (ctx) {
        console.log("cai aqui no list f ctx ");
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: nome,
            datasets: [{
              label: 'Salário',
              data: salario,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Salário'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Colaboradores'
                }
              }
            }
          }
        });
      }
    }
  }
  
  
      

