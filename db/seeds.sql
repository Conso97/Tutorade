USE tutorade_db;

INSERT INTO roles (id, title)
VALUES (1, "Student"),
       (2, "Tutor");
       

INSERT INTO users (id, first_name, last_name, role_id, email)
VALUES (1, "John", "Doe", 1, "student@student.com"),
       (2, "Mike", "Chan", 2, "tutor@tutor.com");


INSERT INTO languages (id, title)
VALUES (1, "C"),
       (2, "C#"),
       (3, "C++"),
       (4, "Python"),
       (5, "Java"),
       (6, "JavaScript"),
       (7, "PHP"),
       (8, "Ruby"),
       (9, "TypeScript"),
       (10, "SQL");

INSERT INTO user_langs (user_Id, language_id)
VALUES (2, 1),
       (2, 2),
       (2, 3);

-- temporary disabling foreign keys check
set foreign_key_checks=0;
ALTER TABLE users CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ;
ALTER TABLE users AUTO_INCREMENT=3;     


ALTER TABLE languages CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ;
ALTER TABLE languages AUTO_INCREMENT=11;  


ALTER TABLE roles CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ;
ALTER TABLE roles AUTO_INCREMENT=3;  
set foreign_key_checks=1;
-- auto increment in roles table might be needed in case we add more roles like admin and etc.