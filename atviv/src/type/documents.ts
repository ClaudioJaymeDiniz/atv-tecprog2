export enum tipoDocumento {
    CPF = "Cadastro de Pessoa Física",
    RG = "Registro Geral",
    Passaport = "Passaporte"
}

export type documento = {
    tipo: tipoDocumento;
    numero: string;
    dataEmissao: string;
}