import React, { useState } from 'react';
import { tipoDocumento, documento } from '../../type/documents';
import { IoAddOutline, IoCloseOutline } from 'react-icons/io5';

interface CadastroDocumentoProps {
    setDocumentos: React.Dispatch<React.SetStateAction<documento[]>>;
}

export default function CadastroDocumento({ setDocumentos }: CadastroDocumentoProps) {
    const [doc, setDoc] = useState<documento>({
        tipo: tipoDocumento.CPF,
        numero: '',
        dataEmissao: ''
    });
    const [documentos, setDocumentosState] = useState<documento[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setDoc(prevDoc => ({
            ...prevDoc,
            [name]: value
        }));
    };

    const handleAddDocumento = () => {
        const novosDocumentos = [...documentos, doc];
        setDocumentosState(novosDocumentos);
        setDocumentos(novosDocumentos);
        setDoc({
            tipo: tipoDocumento.CPF,
            numero: '',
            dataEmissao: ''
        });
    };

    const handleRemoveDocumento = (index: number) => {
        const novosDocumentos = documentos.filter((_, i) => i !== index);
        setDocumentosState(novosDocumentos);
        setDocumentos(novosDocumentos);
    };

    return (
        <>  
        <div className="flex justify-start gap-6 flex-col">
            <div>
                <label>Tipo de Documento:</label>
                <select name="tipo" value={doc.tipo} onChange={handleChange}>
                    <option value={tipoDocumento.CPF}>{tipoDocumento.CPF}</option>
                    <option value={tipoDocumento.RG}>{tipoDocumento.RG}</option>
                    <option value={tipoDocumento.Passaport}>{tipoDocumento.Passaport}</option>
                </select>
            </div>
            <div className="flex justify-start gap-5 ">
                <div className='input-group group w-4/5'>
                    <input className="input-form peer"
                    type="text" name="numero" placeholder=" " 
                    value={doc.numero} onChange={handleChange} />
                    <label className="label-form">Número do Documento:</label>
                </div>
                <div className='input-group group w-3/5'>
                    <input className="input-form peer w-auto"
                    type="date" name="dataEmissao" placeholder=" " 
                    value={doc.dataEmissao} onChange={handleChange} />
                    <label className="label-form">Data de Emissão:</label>
                    
                </div>
                <IoAddOutline className="w-10 h-20 cursor-pointer" onClick={handleAddDocumento}/>
                </div>
            </div>

            {documentos.length > 1 && (
              <div className="box-documentos">
                    <h3>Documentos:</h3>
                        {documentos.map((documento, index) => (
                            <div className="flex gap-3 items-center" key={index}>
                                <div className="">{documento.tipo}</div>
                                <div className="">{documento.numero}</div>
                                <div className="">{documento.dataEmissao}</div>
                                <IoCloseOutline className="cursor-pointer" 
                                    onClick={() => handleRemoveDocumento(index)}/>
                            </div>
                        ))}
                </div>
            )}
        </>
    );
}