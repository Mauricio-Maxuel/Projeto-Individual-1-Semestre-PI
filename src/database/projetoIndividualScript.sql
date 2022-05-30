create database projetoIndividual;
use projetoindividual;


create table instrumento (
	idInstrumento int primary key auto_increment,
    nomeInstrumento varchar(30)
);
 insert into instrumento values
 (null,"violão"),
 (null,"violino");
 
create table usuario(
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(70),
    emailUsuario varchar(70),
    senha varchar(20),
    fkInstrumento int ,
    foreign key(fkinstrumento) references instrumento(idInstrumento)
);
insert into usuario values
(null,"Matheus","matheus@gmail.com",12345,2),
(null,"julio","julio@gmail.com",12345,1)
;

create table mensagem(
	idMensagem int primary key auto_increment,
    conteudoMensagem varchar(500),
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario)
);

create table cover(
	idVideo int primary key auto_increment,
    linkVideo varchar(20),
    fkusuario int,
    foreign key (fkUsuario) references usuario(idUsuario)
);

select * from mensagem;
 select * from usuario;

 select nomeInstrumento,count(fkInstrumento) from instrumento join usuario on instrumento.idinstrumento = usuario.fkinstrumento group by nomeInstrumento;
 select count(idUsuario) from usuario;