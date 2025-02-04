# Projeto Escola com MySQL 📚

Este projeto foi desenvolvido durante o segundo semestre do primeiro período do curso de **Análise e Desenvolvimento de Sistemas**, como parte da disciplina de **Programação Web**. O sistema oferece um conjunto de funcionalidades para gestão de alunos, permitindo realizar o cadastro, consulta, alteração e exclusão de registros de alunos. Foi desenvolvido com o uso de **React.js** no frontend e **Node.js** com **Express** para o backend.

## 🔨 Funcionalidades

O sistema oferece as seguintes funcionalidades:

1. **Cadastro de Alunos**: Permite o cadastro de novos alunos com informações como código, nome, cidade e estado. Ao cadastrar um aluno, seus dados são enviados para o backend e armazenados.
   
2. **Consulta de Alunos**: Exibe a lista de alunos cadastrados no sistema. O usuário pode visualizar os dados de cada aluno e realizar operações de alteração e exclusão diretamente na interface.

3. **Alteração de Dados de Alunos**: Permite editar as informações de um aluno específico, como nome, cidade e estado. Após a edição, os dados são atualizados no backend.

4. **Exclusão de Alunos**: Permite excluir um aluno do sistema após uma confirmação. A exclusão é realizada no backend e o aluno é removido permanentemente.

## 👾 Tecnologias Utilizadas

- **Frontend**:
  - **React.js**: Biblioteca JavaScript para construção de interfaces de usuário dinâmicas.
  - **Axios**: Cliente HTTP para realizar requisições à API do backend.
  - **CSS**: Estilização das páginas.
  - **HTML5**: Estrutura das páginas da aplicação.

- **Backend**:
  - **Node.js**: Ambiente de execução JavaScript no servidor.
  - **Express**: Framework web para construir a API RESTful do backend.
  - **MySQL**: Banco de dados relacional utilizado para armazenar os dados dos alunos.

## 🛠️ Como Rodar o Projeto

### 1. Criando o Banco de Dados MySQL

Antes de rodar o projeto, você precisa criar o banco de dados MySQL. Para isso, siga os passos abaixo:

1. Crie o banco de dados no MySQL utilizando o script SQL localizado em `escola > src > aulabd.sql`.
2. O arquivo SQL contém a criação das tabelas necessárias para armazenar os dados dos alunos.

### 2. Configurando o Backend

No diretório **backend**, configure a conexão com o banco de dados no arquivo de configuração do backend.
```
node index.js
```
Isso iniciará o servidor backend, que ficará disponível em http://localhost:3001.

### 3. Configurando o Frontend
No diretório do **frontend**,  instale as dependências necessárias com o comando:
```
npm install
```
```
npm start
```
O frontend estará disponível em http://localhost:3000, e você poderá acessar a interface para cadastrar, consultar, alterar e excluir alunos.
