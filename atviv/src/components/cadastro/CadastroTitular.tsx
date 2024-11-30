import React, { useState } from 'react';
import { IoAddOutline, IoCloseOutline } from 'react-icons/io5';
import { cliente } from '../../type/cliente';
import { documento, tipoDocumento } from '../../type/documents';
import { telefone } from '../../type/telefone';
import { endereco } from '../../type/endereco';
import { adicionarCliente, obterClientes } from '../../banco';

export default function CadastroTitular() {
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [documentos, setDocumentos] = useState<documento[]>(
        [{ tipo: tipoDocumento.CPF, numero: '', dataEmissao: '' }]);
    const [telefones, setTelefones] = useState<telefone[]>(
        [{ ddd: '', numero: '' }]);
    const [endereco, setEndereco] = useState<endereco>({
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
        pais: ''
    });
    const [clientes, setClientes] = useState<cliente[]>(obterClientes());
    const [doc, setDoc] = useState<documento>({ tipo: tipoDocumento.CPF, numero: '', dataEmissao: '' });

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

    const handleAddTelefone = () => {
        setTelefones([...telefones, { ddd: '', numero: '' }]);
    };

    

    const handleTelefoneChange = (index: number, field: string, value: string) => {
        const newTelefones = telefones.map((telefone, i) => 
            i === index ? { ...telefone, [field]: value } : telefone
        );
        setTelefones(newTelefones);
    };

    const handleRemoveTelefone = (index: number) => {
        const novosTelefones = telefones.filter((_, i) => i !== index);
        setTelefones(novosTelefones);
    };

    const handleAddDocumento = () => {
        setDocumentos([...documentos, { tipo: tipoDocumento.CPF, numero: '', dataEmissao: '' }]);
    };

    const handleRemoveDocumento = (index: number) => {
        setDocumentos(documentos.filter((_, i) => i !== index));
    };

    const handleDocChange = (index: number, field: string, value: string) => {
        const newDocumentos = documentos.map((documento, i) =>
            i === index ? { ...documento, [field]: value } : documento
        );
        setDocumentos(newDocumentos);
    };
    

    const handleEnderecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEndereco({ ...endereco, [name]: value });
    };

    return (
        <main>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>

                <div className='input-group group'>
                    <input className="input-form peer"
                        type="text" name="nome" placeholder=" " required
                        value={nome} onChange={(e) => setNome(e.target.value)}
                    />
                    <label className="label-form">Nome:</label>
                </div>

                <div className='input-group'>    
                    <input className="input-form peer"
                        type="text" name="nomeSocial" placeholder=" " required
                        value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)}
                    />
                    <label className="label-form peer">Nome Social:</label>
                </div>

                <div className='input-group group'>
                    <input className="input-form peer"
                        type="date" name="dataNascimento" placeholder=" " required
                        value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)}
                    />
                    <label className="label-form">Data Nascimento:</label>
                </div>
                {documentos.map((documento, index) => (
    <div className="flex justify-start gap-6 flex-col" key={index}>
        <div>
            <label>Tipo de Documento:</label>
            <select
                name="tipo"
                value={documento.tipo}
                onChange={(e) => handleDocChange(index, 'tipo', e.target.value)}
            >
                <option value={tipoDocumento.CPF}>{tipoDocumento.CPF}</option>
                <option value={tipoDocumento.RG}>{tipoDocumento.RG}</option>
                <option value={tipoDocumento.Passaport}>{tipoDocumento.Passaport}</option>
            </select>
        </div>

        <div className="flex justify-start gap-5">
            <div className="input-group group w-4/5">
                <input
                    className="input-form peer"
                    type="text"
                    name="numero"
                    placeholder=" "
                    value={documento.numero}
                    onChange={(e) => handleDocChange(index, 'numero', e.target.value)}
                />
                <label className="label-form">Número do Documento:</label>
            </div>

            <div className="input-group group w-3/5">
                <input
                    className="input-form peer w-auto"
                    type="date"
                    name="dataEmissao"
                    placeholder=" "
                    value={documento.dataEmissao}
                    onChange={(e) => handleDocChange(index, 'dataEmissao', e.target.value)}
                />
                <label className="label-form">Data de Emissão:</label>
            </div>

            <IoCloseOutline
                className="w-10 h-10 cursor-pointer"
                onClick={() => handleRemoveDocumento(index)}
            />
        </div>
    </div>
))}

<button type="button" className="add-documento-btn" onClick={handleAddDocumento}>
    Adicionar Documento
</button>
                {/* <div className="flex justify-start gap-6 flex-col">
                    <div>
                        <label>Tipo de Documento:</label>
                        <select name="tipo" value={doc.tipo} onChange={handleDocChange}>
                            <option value={tipoDocumento.CPF}>{tipoDocumento.CPF}</option>
                            <option value={tipoDocumento.RG}>{tipoDocumento.RG}</option>
                            <option value={tipoDocumento.Passaport}>{tipoDocumento.Passaport}</option>
                        </select>
                    </div>

                    <div className="flex justify-start gap-5 ">
                        <div className='input-group group w-4/5'>
                            <input className="input-form peer"
                                type="text" name="numero" placeholder=" "
                                value={doc.numero} onChange={handleDocChange} />
                            <label className="label-form">Número do Documento:</label>
                        </div>

                        <div className='input-group group w-3/5'>
                            <input className="input-form peer w-auto"
                                type="date" name="dataEmissao" placeholder=" "
                                value={doc.dataEmissao} onChange={handleDocChange} />
                            <label className="label-form">Data de Emissão:</label>
                        </div>

                        <IoAddOutline className="w-10 h-20 cursor-pointer" onClick={handleAddDocumento} />
                    </div>
                </div>

                {documentos.length > 0 && (
                    <div className="box-documentos">
                        <h3>Documentos:</h3>
                        {documentos.map((documento, index) => (
                            <div className="flex gap-3 items-center" key={index}>
                                <div>{documento.tipo}</div>
                                <div>{documento.numero}</div>
                                <div>{documento.dataEmissao}</div>
                                <IoCloseOutline className="cursor-pointer"
                                    onClick={() => handleRemoveDocumento(index)} />
                            </div>
                        ))}
                    </div> */}
                {/* )} */}
                {telefones.map((telefone, index) => (
                    <div className="flex justify-start gap-6" key={index}>
                        <div className="input-group w-10">
                            <input className="input-form peer w-10"
                                type="text" name="ddd" placeholder=" "
                                value={telefone.ddd}
                                onChange={(e) => handleTelefoneChange(index, 'ddd', e.target.value)}
                            />
                            <label className="label-form">DDD:</label>
                        </div>

                        <div className="input-group">
                            <input className="input-form peer w-2/5"
                                type="text" name="numero" placeholder=" "
                                value={telefone.numero}
                                onChange={(e) => handleTelefoneChange(index, 'numero', e.target.value)}
                            />
                            <label className="label-form">Número:</label>
                        </div>
                        <IoCloseOutline className="w-10 h 10 cursor-pointer" 
                                    onClick={() => handleRemoveTelefone(index)}/>
                    </div>
                    
                ))}
                <button type="button" className="add-telefone-btn" onClick={handleAddTelefone}>
                    Adicionar Outro Telefone
                </button>
                

                <div className='input-group group'>
                    <input className="input-form peer"
                        type="text" name="rua"
                        placeholder=" " required
                        value={endereco.rua} onChange={handleEnderecoChange}
                    />
                    <label className="label-form">Rua:</label>
                </div>
                
                <div className='input-group group'>
                    <input className="input-form peer"
                        type="text" name="bairro"
                        placeholder=" " required
                        value={endereco.bairro} onChange={handleEnderecoChange}
                    />
                    <label className="label-form">Bairro:</label>
                </div>

                <div className='input-group group'>
                    <input className="input-form peer"
                        type="text" name="cidade"
                        placeholder=" " required
                        value={endereco.cidade} onChange={handleEnderecoChange}
                    />
                    <label className="label-form">Cidade:</label>
                </div>

                <div className='input-group group'>
                    <input className="input-form peer"
                        type="text" name="estado"
                        placeholder=" " required
                        value={endereco.estado} onChange={handleEnderecoChange}
                    />
                    <label className="label-form">Estado:</label>
                </div>

                <div className='input-group group'>
                    <input className="input-form peer"
                        type="text" name="cep"
                        placeholder=" " required
                        value={endereco.cep} onChange={handleEnderecoChange}
                    />
                    <label className="label-form">CEP:</label>
                </div>

                <div className='input-group group'>
                    <input className="input-form peer"
                        type="text" name="pais"
                        placeholder=" " required
                        value={endereco.pais} onChange={handleEnderecoChange}
                    />
                    <label className="label-form">País:</label>
                </div>
                <button className="submit-btn" type="submit">Cadastrar</button>
            </form>
        </main>
    );
}