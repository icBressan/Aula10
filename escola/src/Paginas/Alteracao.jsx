import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function AlteracaoAluno() {
    const navigate = useNavigate();
    const { codigo } = useParams();
    const [aluno, setAluno] = useState({
        codigo: '',
        nome: '',
        cidade: '',
        estado: ''
    });

    useEffect(() => {
        async function buscarAluno() {
            try {
                const response = await axios.get(`http://localhost:3001/alunos/${codigo}`);
                setAluno(response.data);
            } catch (error) {
                alert('Erro ao buscar aluno!');
                navigate('/consulta');
            }
        }
        buscarAluno();
    }, [codigo, navigate]);

    function handleChange(e) {
        const { name, value } = e.target;
        setAluno(prevState => ({ ...prevState, [name]: value }));
    }

    async function salvarAlteracao(e) {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/alunos/${codigo}`, aluno);
            alert('Aluno atualizado com sucesso!');
            navigate('/consulta');
        } catch {
            alert('Erro ao atualizar aluno!');
        }
    }

    function cancelar() {
        navigate('/consulta');
    }

    return (
        <div>
            <h1 align="center">Alteração de Aluno</h1>
            <form onSubmit={salvarAlteracao} className="destaque">
                <p>
                    Código: <br />
                    <input type="text" name="codigo" value={aluno.codigo} disabled />
                </p>
                <p>
                    Nome: <br />
                    <input type="text" name="nome" value={aluno.nome} onChange={handleChange} required />
                </p>
                <p>
                    Cidade:<br />
                    <input type="text" name="cidade" value={aluno.cidade} onChange={handleChange} required />
                </p>
                <p>
                    Estado:<br />
                    <input type="text" name="estado" value={aluno.estado} onChange={handleChange} required />
                </p>
                <p className="botao-container">
                    <button type="submit" className="botao">Salvar</button>
                    <button type="button" className="botao" onClick={cancelar}>Cancelar</button>
                </p>
            </form>
        </div>
    );
}
