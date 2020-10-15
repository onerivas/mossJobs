--create database
database: postgresql-horizontal-30267

--connect
\c jobs;

--create table
CREATE TABLE listings (id SERIAL, job_title VARCHAR(50), company VARCHAR(50), description VARCHAR(200), location VARCHAR(50), qualification VARCHAR(50), salary VARCHAR(20), link VARCHAR(2000));

--inserted into table

INSERT INTO listings (job_title, description, location, qualification, salary, link) VALUES ('Software Developer', 'Property Matrix', 'Property Matrix is looking for recent graduates who are ready to launch their professional career in the software industry. Our growth is driven by delivering real results for our clients. Therefore, we seek to employ determined high-performing software developmers with a passion for coding that results in transformational business outcomes through the use of disruptive technologies and solutions.', 'Culver City, CA', 'Bachelor Degree (Preferred). Knowledge of HTML/CSS and Javascript. Experience with React, Ruby on Rails and SQL is beneficial but not required', '$50,000', 'https://www.propertymatrix.com/careers/software-developer/');

INSERT INTO listings (job_title, description, location, qualification, salary, link) VALUES
