--create database
heroku database: postgresql-horizontal-30267
local database: jobs

--create table
CREATE TABLE listings (id SERIAL, job_title VARCHAR(50), company VARCHAR(50), description VARCHAR(1000), location VARCHAR(50), qualification VARCHAR(1000), salary VARCHAR(50), link VARCHAR(2000));

--inserted into table

INSERT INTO listings (job_title, company, description, location, qualification, salary, link) VALUES ('Software Developer', 'Property Matrix', 'Property Matrix is looking for recent graduates who are ready to launch their professional career in the software industry. Our growth is driven by delivering real results for our clients. Therefore, we seek to employ determined high-performing software developmers with a passion for coding that results in transformational business outcomes through the use of disruptive technologies and solutions.', 'Culver City, CA', 'Bachelor Degree (Preferred). Knowledge of HTML/CSS and Javascript. Experience with React, Ruby on Rails and SQL is beneficial but not required', '$50,000', 'https://www.propertymatrix.com/careers/software-developer/');

INSERT INTO listings (job_title, company, description, location, qualification, salary, link) VALUES ('Front End Developer', 'Full Circle LLC', 'Manage, Edit, and Innovate Bigcommerce and Shopify themes. Create user friendly themes related to both retail and wholesale trades. Creating better customer process that will convert into a higher percentage of checkouts. Understand customers visions about their site and how they want it to look and feel.', 'Michigan', 'CSS, 1 year (Required), Front-End Development, 1 year (Preferred), Bachelor Degree (Preferred).', '$29 - $35 per hour.', 'https://www.indeed.com/');
