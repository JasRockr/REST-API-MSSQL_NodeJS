--
USE master
GO -- CREATE DATABASE test_api
  CREATE DATABASE test_api;
-- USE DATABASE
USE test_api;
-- CREATE TABLE asesores_api
CREATE TABLE dbo.asesores_api(
  Id INT IDENTITY(1, 1) NOT NULL,
  ID_Asesor VARCHAR(16) NOT NULL,
  Nombre_Asesor VARCHAR(50) NOT NULL,
  Equipo_Entidad VARCHAR(30) NOT NULL,
  Compania VARCHAR(30) NOT NULL,
  Observaciones VARCHAR(100) NULL,
  Fecha_Novedad DATETIME NOT NULL,
  Usuario VARCHAR(30) NOT NULL
);
-- SELECT ALL RECORDS
SELECT *
FROM asesores_api;
-- SELECT FIRST 100 RECORDS
SELECT TOP 100 *
FROM asesores_api;
-- COUNT ALL RECORDS
SELECT COUNT(*) AS Total
FROM asesores_api;
--