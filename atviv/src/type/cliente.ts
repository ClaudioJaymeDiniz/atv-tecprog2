import { endereco } from "./endereco";
import { documento } from "./documents";
import { telefone } from "./telefone";

export type cliente = {
    nome: string;
    nomeSocial: string;
    dataNascimento: string;
    telefones: telefone[];
    documentos: documento[];
    endereco: endereco;
    dependentes: cliente[];
    titular: cliente | null;
}