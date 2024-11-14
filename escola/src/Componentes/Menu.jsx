import { Link } from "react-router-dom";

export default function Menu()
{
    return (
        <header>
            <h2>Escola</h2>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/cadastro">Novo Aluno</Link>
                <Link to="/consulta">Listagem de Alunos</Link>
            </div>
        </header>
    );
}