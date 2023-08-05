import { Setor } from "src/app/Setor/model/setor";

export interface Professor {

idProfessor: string | null;
nameProf: string | null;
nascimento: string | null;
endereco: string | null;
telefone: string | null;
email: string | null;
salario: string | null;

idSetor: Setor | any;



}
