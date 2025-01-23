import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function ExclusaoAluno() {
    const navigate = useNavigate();
    const { codigo } = useParams();
    const [aluno, setAluno] = useState(null);

    useEffect(() => {
        async function buscarAluno() {
            try {
                const response = await axios.get(`http://localhost:3001/alunos/${codigo}`);
                setAluno(response.data);
            } catch {
                alert('Erro ao buscar aluno!');
                navigate('/consulta'); 
            }
        }

        if (!aluno) { 
            buscarAluno();
        }
    }, [codigo, aluno, navigate]);

    async function confirmarExclusao() {
        try {
            await axios.delete(`http://localhost:3001/alunos/${codigo}`);
            alert('Aluno excluído com sucesso!');
            navigate('/consulta'); 
        } catch {
            alert('Erro ao excluir aluno!');
        }
    }

    function cancelar() {
        navigate('/consulta'); 
    }

    if (!aluno) return <div>Carregando...</div>; 

    return (
        <div>
            <h1 align="center">Exclusão de Aluno</h1>
            <form className="destaque">
                <h3>Tem certeza que deseja excluir o aluno?</h3>
                <p>
                    <strong>Código:</strong> 
                    <input type="text" name="codigo" value={aluno.codigo} disabled />
                </p>
                <p>
                    <strong>Nome:</strong> 
                    <input type="text" name="nome" value={aluno.nome} disabled />
                </p>
                <p className="botao-container">
                    <button className="botao" type="button" onClick={confirmarExclusao}>Confirmar</button>
                    <button className="botao" type="button" onClick={cancelar}>Cancelar</button>
                </p>
            </form>
        </div>
    );
}
