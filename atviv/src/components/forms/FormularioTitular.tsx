
import React, { useState } from 'react';

import { cliente } from '../../type/cliente';
import { documento } from '../../type/documents';
import { telefone } from '../../type/telefone';
import { endereco } from '../../type/endereco';
import { adicionarCliente, obterClientes } from '../../banco';
import CadastroDocumento from '../cadastro/CadastroDocumento';
import CadastroTelefone from '../cadastro/CadastroTelefone';

export default function FormularioTitular() {
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [documentos, setDocumentos] = useState<documento[]>([]);
    const [telefones, setTelefones] = useState<telefone[]>([]);
    const [endereco, setEndereco] = useState<endereco>({
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
        pais: ''
    });
    const [clientes, setClientes] = useState<cliente[]>(obterClientes());

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const novoCliente: cliente = {
            nome,
            nomeSocial,
            dataNascimento,
            documentos,
            telefones,
            endereco,
            dependentes: [],
            titular: null
        };
        adicionarCliente(novoCliente);
        setClientes(obterClientes());
    };

    return (
        <main>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className='input-group group'>
                    <input
                        className="input-form peer"
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder=" "
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <label className="label-form">Nome:</label>
                </div>
                <div className='input-group'>
                    <input
                        className="input-form peer"
                        type="text"
                        name="nomeSocial"
                        id="nomeSocial"
                        placeholder=" "
                        required
                        value={nomeSocial}
                        onChange={(e) => setNomeSocial(e.target.value)}
                    />
                    <label className="label-form peer">Nome Social:</label>
                </div>
                <div className='input-group group'>
                    <input
                        className="input-form peer"
                        type="date"
                        name="dataNascimento"
                        id="dataNascimento"
                        placeholder=" "
                        required
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                    />
                    <label className="label-form peer">Data de Nascimento:</label>
                </div>
                <CadastroDocumento setDocumentos={setDocumentos} />
                <CadastroTelefone setTelefones={setTelefones} />
                <div className='input-group group'>
                    <input
                        className="input-form peer"
                        type="text"
                        name="rua"
                        id="rua"
                        placeholder=" "
                        required
                        value={endereco.rua}
                        onChange={(e) => setEndereco({ ...endereco, rua: e.target.value })}
                    />
                    <label className="label-form">Rua:</label>
                </div>
                <div className='input-group group'>
                    <input
                        className="input-form peer"
                        type="text"
                        name="bairro"
                        id="bairro"
                        placeholder=" "
                        required
                        value={endereco.bairro}
                        onChange={(e) => setEndereco({ ...endereco, bairro: e.target.value })}
                    />
                    <label className="label-form">Bairro:</label>
                </div>
                <div className='input-group group'>
                    <input
                        className="input-form peer"
                        type="text"
                        name="cidade"
                        id="cidade"
                        placeholder=" "
                        required
                        value={endereco.cidade}
                        onChange={(e) => setEndereco({ ...endereco, cidade: e.target.value })}
                    />
                    <label className="label-form">Cidade:</label>
                </div>
                <div className='input-group group'>
                    <input
                        className="input-form peer"
                        type="text"
                        name="estado"
                        id="estado"
                        placeholder=" "
                        required
                        value={endereco.estado}
                        onChange={(e) => setEndereco({ ...endereco, estado: e.target.value })}
                    />
                    <label className="label-form">Estado:</label>
                </div>
                <div className='input-group group'>
                    <input
                        className="input-form peer"
                        type="text"
                        name="cep"
                        id="cep"
                        placeholder=" "
                        required
                        value={endereco.cep}
                        onChange={(e) => setEndereco({ ...endereco, cep: e.target.value })}
                    />
                    <label className="label-form">CEP:</label>
                </div>
                <div className='input-group group'>
                    <input
                        className="input-form peer"
                        type="text"
                        name="pais"
                        id="pais"
                        placeholder=" "
                        required
                        value={endereco.pais}
                        onChange={(e) => setEndereco({ ...endereco, pais: e.target.value })}
                    />
                    <label className="label-form">País:</label>
                </div>
                <button className="submit-btn" type="submit">Cadastrar</button>
            </form>
        </main>
    );
}