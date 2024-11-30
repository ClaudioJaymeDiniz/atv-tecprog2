import { Link } from "react-router-dom";


export default function LinkCadastros() {
    return (
        <div className="flex justify-start gap-6">
            <Link to="/cadastro/cliente" className="btn-primary">Cadastro de Cliente</Link>
            <Link to="/cadastro/" className="btn-primary">Cadastro de Telefone</Link>
            <Link to="/cadastro/documento" className="btn-primary">Cadastro de Documento</Link>
            <Link to="/cadastro/endereco" className="btn-primary">Cadastro de Endereço</Link>
        </div>
    );
}