create database if not exists mydb;
use mydb;
drop table if exists users;

create table users(
	ID int primary key,
	Name char(25) not null,
	Age int not null,
	Department char(20),
	Subject char(10)
);

INSERT INTO users VALUES(18133,'rutik',23,'CS','OS');
INSERT INTO users VALUES(18134,'admin',24,'CS','DS');
INSERT INTO users VALUES(18135,'rohan',22,'CS','TOC');
INSERT INTO users VALUES(18136,'ratnesh',23,'CS','DOS');
INSERT INTO users VALUES(18137,'harshal',23,'CS','OS');
