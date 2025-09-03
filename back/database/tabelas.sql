create table pessoa (
id serial primary key  UNIQUE not null,
nasc date not null,
nome varchar (50) not null,
acesso bool not null,
cep int null,
senha varchar (100) not null,
email varchar (50) UNIQUE null,
cpf varchar (12) UNIQUE null,
telEm varchar (50) null,
numSus varchar (50) UNIQUE null,
sexo varchar (10) null,
identGenero varchar (20) null
);

create table obs ( 
tipo varchar (50) not null,
Pessoa int not null,
resposta varchar (50) not null,
FOREIGN key (Pessoa) references pessoa (id)
);


create table hospital (id serial primary key,
nome varchar (50) not null,
cep int not null,
latitude numeric (9,6),
logintude numeric (9,6),
endereco varchar (50),
numero int,
bairro varchar (50)
);


create table medico (id serial primary key,
nasc date not null,
nome varchar (50) not null,
senha varchar (100) not null,
cpf varchar (12) UNIQUE null,
crm varchar (100) ,
estadoCrm varchar(10),
area int not null,
FOREIGN key (area) references area (id)
);

create table exame (id serial primary key,
data date not null,
hora varchar (5) not null,
ano int not null,
tipo varchar (100) not null,
resultado varchar (20) DEFAULT 'Em Analise',
documento Text null,
pessoa int not null,
medico int null,
hospital int not null,
FOREIGN key (pessoa) references pessoa (id),
FOREIGN key (medico) references medico (id),
FOREIGN key (hospital) references hospital (id));


create table consulta (id serial primary key,
data date not null,
hora varchar (5) not null,
ano int not null,
pessoa int not null,
medico int null,
hospital int not null,
FOREIGN key (pessoa) references pessoa (id),
FOREIGN key (medico) references medico (id),
FOREIGN key (hospital) references hospital (id));

create table trabalho (id serial primary key,
medico int null,
hospital int not null,
FOREIGN key (medico) references medico (id),
FOREIGN key (hospital) references hospital (id));


create table area (id serial primary key,
nome varchar not null )







































--create table pessoa (id serial primary key  UNIQUE not null, nasc date not null, nome varchar (50) not null, idade int not null, acesso bool not null, cep int null, senha varchar (100) not null, email varchar (50) UNIQUE null, cpf varchar (12) UNIQUE null, telEm varchar (50) null, numSus varchar (50) UNIQUE null, sexo varchar (10) null, identGenero varchar (20) null);

--create table obs ( tipo varchar (50) not null, Pessoa int not null, resposta varchar (50) not null, FOREIGN key (Pessoa) references pessoa (id));

--create table hospital (id serial primary key, nome varchar (50) not null, cep int not null, latitude numeric (9,6), logintude numeric (9,6), endereco varchar (50), numero int, bairro varchar (50) );



