import { cliente } from './type/cliente';

let clientes: cliente[] = [];

export const adicionarCliente = (novoCliente: cliente) => {
    clientes.push(novoCliente);
    console.log('Cliente adicionado:', novoCliente);
    console.log('Clientes atuais:', clientes);
};

export const obterClientes = (): cliente[] => {
    console.log('Obtendo clientes:', clientes);
    return clientes;
};

export const adicionarDependente = (titularId: string, dependente: cliente) => {
    clientes = clientes.map(cliente =>
        cliente.nome === titularId
            ? { ...cliente, dependentes: [...cliente.dependentes, dependente] }
            : cliente
    );
    console.log('Dependente adicionado:', dependente);
    console.log('Clientes atuais:', clientes);
};