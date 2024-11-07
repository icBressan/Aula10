import { Link } from "react-router-dom";

export default function Erro()
{
    return (
        <div className="conteudo">
            <h1>Erro</h1>
            <p>Parece que a página que você está procurando não está disponível. Isso pode ter acontecido por um link quebrado, um erro de digitação ou a página pode ter sido removida.</p>
            
            <h2>O que fazer agora?</h2>
            <ul>
                <li>Verifique se o endereço está correto.</li>
                <li>Volte para a <Link to="/">página inicial</Link> e continue sua navegação.</li>
                <li>Se precisar de ajuda, entre em contato conosco.</li>
            </ul>

            <p>Agradecemos a sua compreensão!</p>
        </div>
    );
}