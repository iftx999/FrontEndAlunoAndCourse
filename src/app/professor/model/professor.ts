import { Setor } from "src/app/Setor/model/setor";

export interface Professor {

idProfessor: string;
nameProf: string;
nascimento: string;
endereco: string;
telefone: string;
email: string;
salario: string;

idSetor: Setor | any;



}
