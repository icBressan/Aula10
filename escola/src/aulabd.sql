create database aulabd;

use aulabd;

create table alunos (
	codigo int key auto_increment,
    nome varchar(50),
    cidade varchar(50),
    estado varchar(2));
    
select * from alunos;