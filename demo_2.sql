
CREATE DATABASE db_script;
\c db_script
CREATE TABLE my_table(num int);
INSERT INTO my_table (num) VALUES(20);
SELECT * FROM my_table;