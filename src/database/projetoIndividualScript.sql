create database projetoIndividual;
use projetoindividual;


create table instrumento (
	idInstrumento int primary key auto_increment,
    nomeInstrumento varchar(30)
);
create table usuario(
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(70),
    emailUsuario varchar(70),
    senha varchar(20),
    fkInstrumento int ,
    foreign key(fkinstrumento) references instrumento(idInstrumento)
);