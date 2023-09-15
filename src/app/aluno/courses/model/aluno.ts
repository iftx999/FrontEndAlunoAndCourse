import { Course } from "src/app/courses/model/course";

export interface Aluno {
  idAluno: number;
  nome: string;
  cpf: number;
  idade: number;
  responsavel: string;
  contato: string;
  idCourse: Course | any;

}
