import { Setor } from "src/app/Setor/model/setor";

export interface Professor {
    idProfessor: number;
    nameProf: string;
    nascimento: string;
    endereco: string;
    telefone: string;
    email: string;
    salario: number;
    idSetor: Setor | any;



}
