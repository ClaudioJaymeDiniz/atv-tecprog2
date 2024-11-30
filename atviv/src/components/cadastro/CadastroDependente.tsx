import React, { useState } from 'react';
import { cliente } from '../../type/cliente';

interface CadastroDependenteProps {
    titulares: cliente[];
    addDependente: (titularId: string, dependente: cliente) => void;
}

export default function CadastroDependente({ titulares, addDependente }: CadastroDependenteProps) {
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [titularId, setTitularId] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const novoDependente: cliente = {
            nome,
            nomeSocial,
            dataNascimento,
            telefones: [],
            documentos: [],
            endereco: {} as any, // Adicione lógica para coletar o endereço
            dependentes: [],
            titular: null
        };
        addDependente(titularId, novoDependente);
        setNome('');
        setNomeSocial('');
        setDataNascimento('');
        setTitularId('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div>
                <label>Nome Social:</label>
                <input type="text" value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)} />
            </div>
            <div>
                <label>Data de Nascimento:</label>
                <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
            </div>
            <div>
                <label>Titular:</label>
                <select value={titularId} onChange={(e) => setTitularId(e.target.value)}>
                    <option value="">Selecione o Titular</option>
                    {titulares.map((titular) => (
                        <option key={titular.nome} value={titular.nome}>
                            {titular.nome}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Cadastrar Dependente</button>
        </form>
    );
}