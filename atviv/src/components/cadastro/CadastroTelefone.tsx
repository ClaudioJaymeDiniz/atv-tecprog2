import React, { useState } from 'react';
import { IoAddOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

type Telefone = {
    ddd: string;
    numero: string;
};

interface CadastroTelefoneProps {
    setTelefones: React.Dispatch<React.SetStateAction<Telefone[]>>;
}

export default function CadastroTelefone({ setTelefones }: CadastroTelefoneProps) {
    const [telefone, setTelefone] = useState<Telefone>({
        ddd: '',
        numero: ''
    });
    const [telefones, setTelefonesState] = useState<Telefone[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTelefone(prevTelefone => ({
            ...prevTelefone,
            [name]: value
        }));
    };

    const handleAddTelefone = () => {
        const novosTelefones = [...telefones, telefone];
        setTelefonesState(novosTelefones);
        setTelefones(novosTelefones);
        setTelefone({
            ddd: '',
            numero: ''
        });
    };

    const handleRemoveTelefone = (index: number) => {
        const novosTelefones = telefones.filter((_, i) => i !== index);
        setTelefonesState(novosTelefones);
        setTelefones(novosTelefones);
    };

    return (
        <>
            <div className="flex justify-start gap-6">
                <div className='input-group w-10'>
                    <input className="input-form peer w-10" 
                    type="text" name="ddd" placeholder=" " 
                    value={telefone.ddd} onChange={handleChange} />
                    <label className="label-form">DDD:</label>
                </div>
                <div className='input-group'>
                    <input className="input-form peer w-2/5" 
                    type="text" name="numero" placeholder=" " 
                    value={telefone.numero} onChange={handleChange} />
                    <label className="label-form">Número:</label>
                </div>
                <IoAddOutline className="w-10 h-10 cursor-pointer"onClick={handleAddTelefone}/>
                
            
            </div>
            {telefones.length > 1 && (
                <div className="telefones">
                    <h3>Telefones:</h3>
                        {telefones.map((telefone, index) => (
                            <div className="tel flex gap-1 items-center" key={index}>
                                <div className="ddd">({telefone.ddd})</div>
                                <div className="numero">{telefone.numero}</div>
                                <IoCloseOutline className="w-10 h 10 cursor-pointer" 
                                    onClick={() => handleRemoveTelefone(index)}/>
                            </div>
                            
                        ))}
                    
                    
                </div>
            )}
        </>
    );
}