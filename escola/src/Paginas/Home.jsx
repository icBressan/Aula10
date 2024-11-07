export default function Home()
{
    return (
        <div className="conteudo">
            <h1> Aula 10 - Projeto Escola com MySQL </h1>
            <h2>Objetivos da Aula: Conceitos de Frontend e Backend na Web</h2>

            <p>Nesta aula, abordaremos os principais conceitos e práticas relacionados ao desenvolvimento web, focando na integração entre <strong>frontend</strong> (interface do usuário) e <strong>backend</strong> (servidor e banco de dados). Os alunos terão contato com o processo completo de criação de uma aplicação web, desde a estruturação das rotas até o consumo e exibição de dados no navegador. Abaixo, seguem os objetivos que serão apresentados e desenvolvidos:</p>

            <h2>Objetivos da Aula</h2>

            <h3>1. Introdução ao Desenvolvimento Web:</h3>
            <ul>
                <li>Apresentar os conceitos de <strong>frontend</strong> e <strong>backend</strong> e explicar como eles se comunicam.</li>
                <li>Definir a função de cada camada:
                    <ul>
                        <li><strong>Frontend:</strong> Responsável pela interface do usuário e interação no navegador.</li>
                        <li><strong>Backend:</strong> Gerencia a lógica de negócios, manipula o banco de dados e responde às requisições do cliente.</li>
                    </ul>
                </li>
            </ul>

            <h3>2. Navegação entre Páginas com React Router:</h3>
            <ul>
                <li>Configuração e uso do <strong>Router</strong> no React para permitir a navegação entre diferentes componentes.</li>
                <li>Criação de um componente que será o <strong>Menu</strong> de navagegação do site.</li>
                <li>Criação de links de navegação utilizando o componente <code>&lt;Link&gt;</code> do <code>react-router-dom</code>.</li>
            </ul>

            <h3>3. Implementação de um CRUD Completo:</h3>
            <ul>
                <li><strong>Backend com Node.js:</strong>
                    <ul>
                    <li>Criação de um projeto <strong>Node.js</strong> para o backend e instalação de dependências necessárias (como <code>express</code> e <code>mysql2</code>).</li>
                        <li>Criação de rotas HTTP para <strong>cadastrar</strong>, <strong>consultar</strong>, <strong>alterar</strong> e <strong>excluir</strong> registros em um banco de dados MySQL.</li>
                        <li>Manipulação de rotas parametrizadas para consultar dados pela <strong>chave primária</strong> (ID).</li>
                    </ul>
                </li>
                <li><strong>Frontend com React:</strong>
                    <ul>
                        <li>Uso do <strong>Axios</strong> para consumir a API criada no backend.</li>
                        <li>Criação de formulários para envio de dados e exibição de resultados.</li>
                        <li>Criação de um projeto <strong>React</strong> para o frontend e configuração do React Router para navegação entre páginas.</li>
                <li>Uso de ferramentas como <strong>Axios</strong> para fazer requisições HTTP.</li>
                        <li>Implementação da funcionalidade de <strong>exclusão</strong> com redirecionamento para uma nova página utilizando o <strong>React Router</strong>.</li>
                    </ul>
                </li>
            </ul>

            <h3>4. Tratamento de Erros e Validações:</h3>
            <ul>
                <li>Identificação e tratamento de erros comuns, como:
                    <ul>
                        <li><strong>AxiosError: Network Error:</strong> Quando não há conexão entre o frontend e o backend.</li>
                        <li><strong>Status Code 500:</strong> Problemas internos no servidor.</li>
                        <li><strong>Status Code 404:</strong> Registro não encontrado ao consultar um ID inexistente.</li>
                    </ul>
                </li>
                <li>Implementação de <strong>try/catch</strong> no React e uso de mensagens claras para o usuário em caso de falhas.</li>
            </ul>
        </div>
    );
}