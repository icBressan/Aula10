import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

export default function Consulta()
{
    const navigate = useNavigate();
    const [alunos, setAlunos] = useState([]);

    async function consultarAlunos() 
    {
        try{
            const response = await axios.get('http://localhost:3000/alunos');
            setAlunos(response.data);
        }
        catch (error){
            alert(error);
        }    
    };

    useEffect(() => {
        consultarAlunos();
    },[]);

    function alterar(id)
    {
        navigate("/alteracao/" + id);
    }

    function excluir(id)
    {
        navigate("/exclusao/"+ id);
    }

    return (
        <div>
            <h1 align="center">Consulta</h1>
            <p>
                tamanho: {alunos.length}
            </p>
            <table>
                <tr> 
                    <th> Codigo </th>
                    <th> Nome </th>
                    <th> Cidade </th>
                    <th> Estado </th>
                    <th> Opções </th>
                </tr>

                {alunos.map(
                    (alunos, index) => (
                        <tr>
                            <td>{alunos.codigo}</td>
                            <td>{alunos.nome}</td>
                            <td>{alunos.cidade}</td>
                            <td>{alunos.estado}</td>
                        </tr>
                    )
                )}
            </table>
        </div>
    );
}