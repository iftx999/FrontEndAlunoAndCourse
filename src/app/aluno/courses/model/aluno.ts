import { Course } from "src/app/courses/model/course";

export interface Aluno {
  idAluno: string;
  nome: string;
  cpf: string;
  idade: string;
  responsavel: string;
  contato: string;
  curso: Course;

}
