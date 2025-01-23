// Consulta
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Consulta() {
    const navigate = useNavigate();
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function consultarAlunos() {
            try {
                const response = await axios.get('http://localhost:3001/alunos');
                setAlunos(response.data);
            } catch {
                alert('Erro ao consultar alunos!');
            }
        }
        consultarAlunos();
    }, []);

    function alterar(codigo) {
        navigate(`/alteracao/${codigo}`);
    }

    function excluir(codigo) {
        navigate(`/exclusao/${codigo}`);
    }

    return (
        <div>
            <h1 align="center">Lista de Alunos</h1>
            <h4 align="center">Total de alunos: {alunos.length}</h4>
            <table className="tabela">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno) => (
                        <tr key={aluno.codigo}>
                            <td>{aluno.codigo}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.cidade}</td>
                            <td>{aluno.estado}</td>
                            <td>
                                <button className="botao" onClick={() => alterar(aluno.codigo)}>Alterar</button>
                                <button className="botao" onClick={() => excluir(aluno.codigo)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
