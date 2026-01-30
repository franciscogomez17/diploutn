CREATE DATABASE ejercicio;
USE ejerciciou2;

CREATE TABLE empleados (
    id_emp INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    trabajo VARCHAR(50),
    edad INT,
    salario INT,
    mail VARCHAR(100)
);

INSERT INTO empleados (id_emp, nombre, apellido, trabajo, edad, salario, mail)
VALUES
(1, 'Juan', 'Hagan', 'Programador Senior', 32, 1200000, 'juan_hagan@bignet.com'),
(2, 'Gonzalo', 'Pillai', 'Programador Senior', 32, 1100000, 'g_pillai@bignet.com'),
(3, 'Ana', 'Dharma', 'Desarrollador Web', 27, 900000, 'ana@bignet.com'),
(4, 'Maria', 'Anchor', 'Desarrollador Web', 26, 850000, 'mary@bignet.com'),
(5, 'Alfred', 'Fernandez', 'Programador', 31, 750000, 'af@bignet.com'),
(6, 'Juan', 'Agüero', 'Programador', 36, 850000, 'juan@bignet.com'),
(7, 'Eduardo', 'Sacan', 'Programador', 25, 850000, 'eddi@bignet.com'),
(8, 'Alejandro', 'Nanda', 'Programador', 32, 700000, 'alenanda@bignet.com'),
(9, 'Hernan', 'Rosso', 'Especialista Multimedia', 33, 900000, 'hernan@bignet.com'),
(10, 'Pablo', 'Simon', 'Especialista Multimedia', 43, 850000, 'ps@bignet.com'),
(11, 'Arturo', 'Hernandez', 'Especialista Multimedia', 32, 750000, 'arturo@bignet.com'),
(12, 'Jimena', 'Cazado', 'Diseñador Web', 32, 1100000, 'jimena@bignet.com'),
(13, 'Roberto', 'Luis', 'Administrador de sistemas', 35, 1000000, 'roberto@bignet.com'),
(14, 'Daniel', 'Gutierrez', 'Administrador de sistemas', 34, 900000, 'daniel@bignet.com'),
(15, 'Miguel', 'Harper', 'Ejecutivo de Ventas Senior', 36, 1200000, 'miguel@bignet.com'),
(16, 'Monica', 'Sanchez', 'Ejecutivo de ventas', 30, 900000, 'monica@bignet.com'),
(17, 'Alicia', 'Simlai', 'Ejecutivo de ventas', 27, 700000, 'alicia@bignet.com'),
(18, 'Jose', 'Iriarte', 'Ejecutivo de ventas', 27, 720000, 'jose@bignet.com'),
(19, 'Sabrina', 'Allende', 'Gerente de Soporte tecnico', 32, 2000000, 'sabrina@bignet.com'),
(20, 'Pedro', 'Campeon', 'Gerente de finanzas', 36, 2200000, 'pedro@bignet.com'),
(21, 'Mariano', 'Dharma', 'Presidente', 28, 3000000, 'mariano@bignet.com');

/*¿Cuáles son los nombres y la ocupación de cada uno de los empleados?  */
SELECT nombre, trabajo
FROM empleados;

/*¿Cuál es el nombre y la edad de cada uno de los empleados? */
SELECT nombre, edad
FROM empleados;

/*¿Cuál es el nombre y la edad de todos los programadores?*/
SELECT nombre, edad
FROM empleados
WHERE trabajo = 'Programador';

/*¿Cuáles son los empleados de mas de 30 años? */
SELECT id_emp, nombre
FROM empleados
WHERE edad > 30;

/*¿Cuál es el apellido y el mail de los empleados llamados Juan?*/
SELECT apellido, mail
FROM empleados
WHERE nombre = 'Juan';

/*¿Cuál es el nombre de las personas que trabajan como Programadores o 
Desarrolladores Web?*/
SELECT nombre
FROM empleados
WHERE trabajo 'Programador'
OR trabajo = 'Desarrollador Web';

/*Mostrar una lista (id_emp, nombre, apellido, trabajo) de las personas cuyo numero 
de empleado esté entre 15 y 20. */
SELECT id_emp, nombre, apellido, trabajo
FROM empleados
WHERE id_emp BETWEEN 15 and 20;

/*¿Cuáles son los Programadores que ganan menos de $80000? */
SELECT *
FROM empleados
WHERE trabajo = 'Programador'
AND salario < 80000;

/*¿Cuáles son los Programadores que ganan entre $75000 y  $90000? */
SELECT *
FROM empleados
WHERE trabajo = 'Programador'
AND salario BETWEEN 750000 AND 90000;

/* ¿Cuáles son los trabajadores cuyo apellido comienza con S? */
SELECT *
FROM empleados
WHERE apellido LIKE 'S%';

/* ¿Cuáles son los trabajadores cuyo nombre termina en l? */
SELECT *
FROM empleados
WHERE nombre LIKE '%l';

/* Agregar un empleado con ID_empleado 22 con los siguientes datos:  
Francisco Perez, Programador, 26 años, salario 90000, mail: 
francisco@bignet.com. */
INSERT INTO empleados (id_emp, nombre, apellido, trabajo, edad, salario, mail)
VALUE (22, Francisco, Perez, Programador, 26, 90000, francisco@bignet.com.);

/*Borrar los datos de Hernan Rosso. */
DELETE FROM empleados
WHERE nombre = 'Hernan'
AND apellido = 'ROSSO';

/*Modificar el salario de Daniel Gutierrez a 1000000.*/
UPDATE empleados
SET salario = 1000000
WHERE nombre = 'Daniel'
AND apellido = 'Gutierrez';
