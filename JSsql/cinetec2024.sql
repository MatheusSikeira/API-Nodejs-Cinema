CREATE DATABASE cinetec2024;

USE cinetec2024; 

CREATE TABLE tbl_diretor (
	id_diretor int primary key auto_increment,
    nome_diretor varchar(45) not null,
    nacionalidade varchar(45) not null,
    dt_nascimento date not null,
    sexo  enum('M', 'F') not null,
    deletado boolean default false
);

CREATE TABLE tbl_genero(
	id_genero int primary key auto_increment,
    genero varchar(45) not null,
    deletado boolean default false
);

CREATE TABLE tbl_ator(
	id_ator int primary key auto_increment,
    nome_ator varchar(45) not null,
    sexo varchar(1) not null,
    dt_nascimento date not null,
    deletado boolean default false
);

CREATE TABLE tbl_filme(
	id_filme int primary key auto_increment,
	nome_filme varchar(45) not null,
    ano_lancamento int(4) not null,
    duracao int(3) not null,
    FK_id_genero int not null,
    FK_id_diretor int not null,
    deletado boolean default false,
	constraint FK_id_genero foreign key(FK_id_genero) references tbl_genero(id_genero),
    constraint FK_id_diretor foreign key(FK_id_diretor) references tbl_diretor(id_diretor)
);

CREATE TABLE tbl_filme_ator (
	FK_id_ator int,
    FK_id_filme int,
    FK_id_filme int,
    constraint FK_id_filme foreign key(FK_id_filme) references tbl_filme(id_filme),
    constraint FK_id_ator foreign key(FK_id_ator) references tbl_ator(id_ator),
    primary key(FK_id_filme, FK_id_ator)
);

CREATE TABLE tbl_usuario(
	id_usuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(45) not null,
    senha varchar(45) not null,
    tipo_usuario enum('administrador', 'comum') not null default 'comum',
    criado_em datetime default now(),
    deletado boolean default false
);
drop table tbl_usuario;
select * from tbl_usuario;
