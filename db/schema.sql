CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
burger_ts TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);

SELECT * FROM burgers;