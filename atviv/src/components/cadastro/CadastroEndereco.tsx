import React, { useState } from 'react';
import { endereco } from '../../type/endereco';

interface CadastroEnderecoProps {
    setEndereco: React.Dispatch<React.SetStateAction<endereco>>;
}

export default function CadastroEndereco({ setEndereco }: CadastroEnderecoProps) {
    const [enderecoState, setEnderecoState] = useState<endereco>({
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
        pais: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEnderecoState(prevEndereco => ({
            ...prevEndereco,
            [name]: value
        }));
    };


    return (
        <>
            <div className="input-group">
                <input className="input-form peer" 
                type="text" name="rua" placeholder=" " required 
                value={enderecoState.rua} onChange={handleChange} />
                <label className="label-form">Rua:</label>
            </div>
            <div className="input-group">
                <input className="input-form peer"
                 type="text" name="bairro" placeholder=" " required 
                 value={enderecoState.bairro} onChange={handleChange} />
                 <label className="label-form">Bairro:</label>
            </div>
            <div className="input-group">
                <input className="input-form peer"
                type="text" name="cidade" placeholder=" " required 
                value={enderecoState.cidade} onChange={handleChange} />
                <label className="label-form">Cidade:</label>
            </div>
            <div className="input-group">
                <input className="input-form peer"
                type="text" name="estado" placeholder=" " required 
                value={enderecoState.estado} onChange={handleChange} />
                <label className="label-form">Estado:</label>
            </div>
            <div className="input-group">
                <input className="input-form peer"
                 type="text" name="cep" placeholder=" " required 
                 value={enderecoState.cep} onChange={handleChange} />
                 <label className="label-form">CEP:</label>
            </div>
            <div className="input-group">
                <input className="input-form peer"
                type="text" name="pais" placeholder=" " required 
                value={enderecoState.pais} onChange={handleChange} />
                <label className="label-form">País:</label>
            </div>

        </>
    );
}