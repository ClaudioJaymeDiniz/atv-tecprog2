import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import CadastroTitular from '../components/cadastro/CadastroTitular'
import ListaClientes from '../components/listar/ListaClientes'


export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrotitular" element={<CadastroTitular />} />
            <Route path="/listarclientes" element={<ListaClientes />} />
        </Routes>
    )
} 