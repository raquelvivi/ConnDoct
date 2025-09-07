-- apague e reinicie a contagem antes de colocar os dados do zero
TRUNCATE TABLE pessoa RESTART IDENTITY CASCADE;
TRUNCATE TABLE area RESTART IDENTITY CASCADE;

ALTER SEQUENCE pessoa_id_seq RESTART WITH 1;
ALTER SEQUENCE hospital_id_seq RESTART WITH 1;
ALTER SEQUENCE medico_id_seq RESTART WITH 1;
ALTER SEQUENCE exame_id_seq RESTART WITH 1;
ALTER SEQUENCE consulta_id_seq RESTART WITH 1;
ALTER SEQUENCE trabalho_id_seq RESTART WITH 1;
ALTER SEQUENCE area_id_seq RESTART WITH 1;


-- =========================
-- ÁREAS MÉDICAS (20 áreas)
-- =========================
INSERT INTO area (nome) VALUES
('Cardiologia'),
('Pediatria'),
('Dermatologia'),
('Oncologia'),
('Psiquiatria'),
('Ortopedia'),
('Ginecologia'),
('Endocrinologia'),
('Neurologia'),
('Oftalmologia'),
('Urologia'),
('Nefrologia'),
('Reumatologia'),
('Hematologia'),
('Imunologia'),
('Clínico Geral'),
('Otorrinolaringologia'),
('Gastroenterologia'),
('Infectologia'),
('Pneumologia');



-- =========================
-- HOSPITAIS (20 hospitais)
-- =========================
INSERT INTO hospital (nome, cep, latitude, logintude, endereco, numero, bairro) VALUES
('Hospital Central', 59000000, -5.794480, -35.211000, 'Av. Brasil', 123, 'Centro'),
('Clínica Saúde Viva', 59140000, -5.793200, -35.205500, 'Rua das Flores', 45, 'Tirol'),
('Hospital Universitário', 59200000, -5.783100, -35.220300, 'Av. Acadêmica', 2000, 'Lagoa Nova'),
('Hospital Infantil Feliz', 59145000, -5.776400, -35.190200, 'Rua Alegria', 300, 'Alecrim'),
('Santa Casa Natal', 59015000, -5.789900, -35.210700, 'Av. Prudente', 500, 'Ribeira'),
('Hospital Regional Oeste', 59020000, -5.800000, -35.220000, 'Rua Ceará', 89, 'Cidade Alta'),
('Hospital Vida Nova', 59025000, -5.790100, -35.230200, 'Av. Esperança', 678, 'Alecrim'),
('Clínica Bem Estar', 59030000, -5.785000, -35.215000, 'Rua Saúde', 90, 'Tirol'),
('Hospital Esperança', 59035000, -5.780200, -35.225100, 'Av. Central', 400, 'Petrópolis'),
('Clínica Mais Vida', 59040000, -5.795300, -35.205700, 'Rua Principal', 77, 'Igapó'),
('Hospital São Jorge', 59045000, -5.796500, -35.214400, 'Rua Verde', 222, 'Cidade da Esperança'),
('Clínica Popular Natal', 59050000, -5.793700, -35.217800, 'Av. Natal', 345, 'Zona Norte'),
('Hospital Luz do Sol', 59055000, -5.794900, -35.220900, 'Rua da Praia', 78, 'Redinha'),
('Clínica Saúde Plena', 59060000, -5.780000, -35.210000, 'Rua Aurora', 456, 'Cidade Alta'),
('Hospital São Lucas', 59065000, -5.781000, -35.205000, 'Av. Lucas', 134, 'Alecrim'),
('Clínica Vitalidade', 59070000, -5.782200, -35.208800, 'Rua Vitória', 800, 'Tirol'),
('Hospital Nossa Senhora', 59075000, -5.783300, -35.210900, 'Rua Central', 98, 'Lagoa Nova'),
('Hospital Progresso', 59080000, -5.784400, -35.215500, 'Av. Progresso', 654, 'Igapó'),
('Clínica do Trabalhador', 59085000, -5.785500, -35.218800, 'Rua Trabalho', 34, 'Ribeira'),
('Hospital Vida Saudável', 59090000, -5.786600, -35.220100, 'Av. Natal Sul', 122, 'Zona Sul');



-- =========================
-- PESSOAS (20 pacientes)
-- =========================
INSERT INTO pessoa (nasc, nome, acesso, cep, senha, email, cpf, telEm, numSus, sexo, identGenero) VALUES
('1990-05-10','Ana Souza', true, 59000001, '123abc','ana@mail.com','12345678901','84988887777','SUS12345','Feminino','Mulher cis'),
('1985-09-23','Carlos Silva', false, 59000002, '321cba','carlos@mail.com','23456789012','84997776666','SUS23456','Masculino','Homem cis'),
('2000-12-01','Marina Alves', true, 59000003, 'senha123','marina@mail.com','34567890123','84996665555','SUS34567','Feminino','Mulher trans'),
('1995-03-14','João Pedro', true, 59000004, 'pass123','joao@mail.com','45678901234','84995554444','SUS45678','Masculino','Homem trans'),
('2010-07-07','Lucas Santos', false, 59000005, 'abc123','lucas@mail.com','56789012345','84994443333','SUS56789','Masculino','Nenhum'),
('1975-11-30','Maria Oliveira', true, 59000006, 'senha!@#','maria@mail.com','67890123456','84993332222','SUS67890','Feminino','Mulher cis'),
('2002-02-20','Beatriz Lima', false, 59000007, 'senhaBea','bea@mail.com','78901234567','84992221111','SUS78901','Feminino','Não-binárie'),
('1968-08-08','José Ferreira', true, 59000008, 'senhaJose','jose@mail.com','89012345678','84991110000','SUS89012','Masculino','Homem cis'),
('1992-03-15','Paula Mendes', true, 59001000, 'p@ssPaula','paula@mail.com','90123456789','84988886666','SUS90123','Feminino','Mulher cis'),
('1988-07-19','Rafael Costa', false, 59002000, 'r@fPass','rafa@mail.com','01234567890','84987775555','SUS01234','Masculino','Homem cis'),
('2005-11-21','Juliana Castro', true, 59003000, 'jul@123','juliana@mail.com','11223344556','84986664444','SUS11223','Feminino','Mulher cis'),
('1999-06-30','Thiago Rocha', true, 59004000, 'th!ag0','thiago@mail.com','22334455667','84985553333','SUS22334','Masculino','Homem cis'),
('1970-01-01','Fernanda Gomes', false, 59005000, 'fer@2025','fer@mail.com','33445566778','84984442222','SUS33445','Feminino','Mulher cis'),
('1983-04-04','Rodrigo Nunes', true, 59006000, 'rod@pass','rodrigo@mail.com','44556677889','84983331111','SUS44556','Masculino','Homem cis'),
('2007-09-09','Isabela Martins', true, 59007000, 'isa@pass','isa@mail.com','55667788990','84982220000','SUS55667','Feminino','Mulher cis'),
('1998-12-25','Gabriel Pinto', false, 59008000, 'gab@pass','gabriel@mail.com','66778899001','84981119999','SUS66778','Masculino','Homem cis'),
('1965-10-10','Cláudia Ramos', true, 59009000, 'cla@pass','claudia@mail.com','77889900112','84980008888','SUS77889','Feminino','Mulher cis'),
('2001-05-05','Diego Araujo', true, 59010000, 'dieg@pass','diego@mail.com','88990011223','84979997777','SUS88990','Masculino','Homem cis'),
('1994-02-28','Tatiane Lopes', false, 59011000, 'tat@pass','tati@mail.com','99001122334','84978886666','SUS99001','Feminino','Mulher cis'),
('1986-08-16','Marcelo Vieira', true, 59012000, 'marc@pass','marcelo@mail.com','11122233344','84977775555','SUS11122','Masculino','Homem cis');


-- =========================
-- OBS (20 registros de condições)
-- =========================
INSERT INTO obs (tipo, pessoa, resposta) VALUES
('Diabetes',2,'Nível 2'),
('Câncer',2,'Nenhum'),
('Autismo',3,'Nível 1'),
('Hipertensão',4,'Nível 2'),
('Asma',5,'Nível 1'),
('Câncer',6,'Nível 2'),
('Síndrome de Down',7,'Nenhum'),
('Hipertensão',8,'Nível 1'),
('Obesidade',9,'Nível 2'),
('Depressão',10,'Nível 1'),
('Diabetes',11,'Nível 1'),
('Ansiedade',12,'Nível 2'),
('Parkinson',13,'Nível 1'),
('Epilepsia',14,'Nível 2'),
('Hipotireoidismo',15,'Nível 1'),
('Alzheimer',16,'Nível 2'),
('Asma',17,'Nenhum'),
('Esquizofrenia',18,'Nível 1'),
('Câncer',19,'Nível 2'),
('Nenhum',20,'Nenhum');



-- =========================
-- MÉDICOS (20 médicos)
-- =========================
INSERT INTO medico (nasc, nome, senha, cpf, crm, estadoCrm, area) VALUES
('1980-04-12','Dr. Paulo Cardoso','senhaPaulo','11111111111','123456','SP',1),
('1978-06-25','Dra. Fernanda Torres','senhaFer','22222222222','234567','RJ',2),
('1985-11-03','Dr. Henrique Melo','senhaHen','33333333333','345678','RN',4),
('1990-01-19','Dra. Luana Costa','senhaLua','44444444444','456789','RN',7),
('1975-02-10','Dr. André Lima','senhaAnd','55555555555','567890','PE',3),
('1982-07-07','Dra. Patrícia Souza','senhaPat','66666666666','678901','SP',5),
('1988-12-12','Dr. Bruno Oliveira','senhaBru','77777777777','789012','RJ',6),
('1993-09-09','Dra. Camila Ramos','senhaCam','88888888888','890123','RN',8),
('1981-03-15','Dr. Felipe Duarte','senhaFel','99999999999','901234','MG',9),
('1979-11-23','Dra. Carolina Prado','senhaCar','10101010101','012345','SP',10),
('1986-05-05','Dr. Daniel Faria','senhaDan','20202020202','123457','PR',11),
('1984-08-18','Dra. Renata Barros','senhaRen','30303030303','234568','RS',12),
('1991-06-06','Dr. Guilherme Rocha','senhaGui','40404040404','345679','BA',13),
('1987-10-10','Dra. Aline Teixeira','senhaAli','50505050505','456780','RN',14),
('1976-04-04','Dr. Ricardo Matos','senhaRic','60606060606','567891','SP',15),
('1989-07-21','Dra. Letícia Pires','senhaLet','70707070707','678902','RJ',16),
('1992-02-22','Dr. Marcelo Alves','senhaMar','80808080808','789013','RN',17),
('1977-01-30','Dra. Silvia Lima','senhaSil','90909090909','890124','PE',18),
('1983-12-12','Dr. João Batista','senhaJoa','12121212121','901235','MG',19),
('1985-03-03','Dra. Bianca Costa','senhaBia','13131313131','012346','SP',20);



-- TRABALHO (ligação médicos ↔ hospitais, 20 registros)
-- =========================
INSERT INTO trabalho (medico, hospital) VALUES
(1,1),(1,2),(2,4),(3,1),(4,3),
(5,5),(6,6),(7,7),(8,8),(9,9),
(10,10),(11,11),(12,12),(13,13),(14,14),
(15,15),(16,16),(17,17),(18,18),(19,19);

-- =========================
-- CONSULTAS (20 registros)
-- =========================
INSERT INTO consulta (data, hora, ano, pessoa, medico, hospital) VALUES
('2025-08-10','09:00',2025,1,1,1),
('2025-08-11','14:30',2025,3,2,4),
('2025-08-12','11:15',2025,5,3,1),
('2025-08-13','16:00',2025,6,4,3),
('2025-08-14','08:00',2025,7,5,5),
('2025-08-15','13:30',2025,8,6,6),
('2025-08-16','10:00',2025,9,7,7),
('2025-08-17','15:00',2025,10,8,8),
('2025-08-18','09:45',2025,11,9,9),
('2025-08-19','16:30',2025,12,10,10),
('2025-08-20','08:15',2025,13,11,11),
('2025-08-21','14:45',2025,14,12,12),
('2025-08-22','11:30',2025,15,13,13),
('2025-08-23','17:00',2025,16,14,14),
('2025-08-24','09:00',2025,17,15,15),
('2025-08-25','15:30',2025,18,16,16),
('2025-08-26','10:15',2025,19,17,17),
('2025-08-27','13:45',2025,20,18,18),
('2025-08-28','09:20',2025,2,19,19),
('2025-08-29','16:10',2025,4,20,20);

-- =========================
-- EXAMES (20 registros)
-- =========================
INSERT INTO exame (data, hora, ano, tipo, resultado, documento, pessoa, medico, hospital) VALUES
('2025-08-10','10:00',2025,'Hemograma','Concluído','hemograma_ana.pdf',1,1,1),
('2025-08-11','15:00',2025,'Raio-X','Em Analise',NULL,3,2,4),
('2025-08-12','12:00',2025,'Biópsia','Concluído','biopsia_lucas.pdf',5,3,1),
('2025-08-13','17:00',2025,'Ultrassom','Concluído','ultra_maria.pdf',6,4,3),
('2025-08-14','09:00',2025,'Tomografia','Em Analise',NULL,7,5,5),
('2025-08-15','14:00',2025,'Ressonância','Concluído','ressonancia_bea.pdf',8,6,6),
('2025-08-16','11:00',2025,'Hemograma','Concluído','hemo_paula.pdf',9,7,7),
('2025-08-17','16:00',2025,'Raio-X','Concluído','raiox_rafa.pdf',10,8,8),
('2025-08-18','10:30',2025,'Endoscopia','Em Analise',NULL,11,9,9),
('2025-08-19','15:30',2025,'Colonoscopia','Concluído','colono_thiago.pdf',12,10,10),
('2025-08-20','08:30',2025,'Biópsia','Em Analise',NULL,13,11,11),
('2025-08-21','14:30',2025,'Raio-X','Concluído','raiox_isa.pdf',14,12,12),
('2025-08-22','11:15',2025,'Hemograma','Concluído','hemo_gab.pdf',15,13,13),
('2025-08-23','17:45',2025,'Ultrassom','Em Analise',NULL,16,14,14),
('2025-08-24','09:30',2025,'Ressonância','Concluído','resso_cla.pdf',17,15,15),
('2025-08-25','15:20',2025,'Tomografia','Concluído','tomo_diego.pdf',18,16,16),
('2025-08-26','10:10',2025,'Hemograma','Concluído')
