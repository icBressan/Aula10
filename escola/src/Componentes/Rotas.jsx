import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./Menu";

import Home from "../Paginas/Home";
import Cadastro from "../Paginas/Cadastro";
import Consulta from "../Paginas/Consulta";
import Alteracao from "../Paginas/Alteracao";
import Exclusao from "../Paginas/Exclusao";
import Erro from "../Paginas/Erro";

export default function Rotas()
{
    return (
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/cadastro" element={ <Cadastro /> } />
                <Route path="/consulta" element={ <Consulta /> } />
                <Route path="/alteracao/:codigo" element={ <Alteracao /> } />
                <Route path="/exclusao/:codigo" element={ <Exclusao /> } />
                <Route path="*" element={ <Erro />} />
            </Routes>
        </BrowserRouter>
    );
}