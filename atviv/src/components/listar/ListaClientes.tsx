import React, { useState, useEffect } from 'react';
import { cliente } from '../../type/cliente';
import { obterClientes } from '../../banco';

const ListaClientes = () => {
    const [clientes, setClientes] = useState<cliente[]>([]);

    const atualizarLista = () => {
        const clientesAtualizados = obterClientes();
        console.log('Clientes atualizados:', clientesAtualizados); // Verificação adicional
        setClientes(clientesAtualizados);
    };

    useEffect(() => {
        atualizarLista();
    }, []);

    useEffect(() => {
        console.log('Estado de clientes atualizado:', clientes);
    }, [clientes]);

    return (
        <div>
            <h1>Lista de Clientes</h1>
            <button onClick={atualizarLista}>Atualizar Lista</button>
            {clientes.length === 0 ? (
                <p>Nenhum cliente cadastrado.</p>
            ) : (
                <ul>
                    {clientes.map((cliente, index) => (
                        <li key={index}>
                            <h2>{cliente.nome}</h2>
                            <p>Nome Social: {cliente.nomeSocial}</p>
                            <p>Data de Nascimento: {cliente.dataNascimento}</p>
                            <h3>Telefones:</h3>
                            <ul>
                                {cliente.telefones.map((telefone, index) => (
                                    <li key={index}>
                                        ({telefone.ddd}) {telefone.numero}
                                    </li>
                                ))}
                            </ul>
                            <h3>Documentos:</h3>
                            <ul>
                                {cliente.documentos.map((documento, index) => (
                                    <li key={index}>
                                        {documento.tipo}: {documento.numero} (Emissão: {documento.dataEmissao})
                                    </li>
                                ))}
                            </ul>
                            <h3>Endereço:</h3>
                            <p>{cliente.endereco.rua} - {cliente.endereco.bairro} - 
                                {cliente.endereco.cidade}/{cliente.endereco.estado} - 
                                CEP: {cliente.endereco.cep} - 
                                {cliente.endereco.pais}</p>
                            {cliente.dependentes.length > 0 && (
                                <>
                                    <h3>Dependentes:</h3>
                                    <ul>
                                        {cliente.dependentes.map((dependente, index) => (
                                            <li key={index}>{dependente.nome}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListaClientes;