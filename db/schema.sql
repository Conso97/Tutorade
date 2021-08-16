DROP DATABASE IF EXISTS tutorade_db;
CREATE DATABASE tutorade_db;

USE tutorade_db;

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  CONSTRAINT roles_pk PRIMARY KEY (id)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT NOT NULL,
  first_name VARCHAR(128) NOT NULL,
  last_name VARCHAR(128) NOT NULL,
  role_id INT NOT NULL,
  email VARCHAR(250) NOT NULL,
  CONSTRAINT users_pk PRIMARY KEY (id),
  FOREIGN KEY (role_id)
    REFERENCES roles(id)
);


DROP TABLE IF EXISTS languages;
CREATE TABLE languages (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  CONSTRAINT languages_pk PRIMARY KEY (id)
);

DROP TABLE IF EXISTS user_langs;
CREATE TABLE user_langs (
  user_Id INT NOT NULL,
  language_id INT NOT NULL,
  CONSTRAINT user_langs_pk PRIMARY KEY (user_Id, language_id),
  foreign key (user_Id) references users(id),
  foreign key (language_id) references languages(id)
);