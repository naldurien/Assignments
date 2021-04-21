Activity - SQL STATEMENTS
Use SQL statements to do the following:

1) Create a table called users with the following schema:
user_id - This should autoincrement and should be primary key 
first_name - varchar(50) 
last_name - varchar(50) 
is_employee - Bool (default is true) 
date_created - timestamp (default value should be current date time) 
date_updated - timestamp (default value should be current date time) 

2) Insert 3 records into the users table (two where isemployee = true and one where isemployee is false)

3) Select all records from the users table

4) Select all records where is_employee is true

5) Sort the records in decending order based on date_created

- - - - 

1) CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	is_employee BOOLEAN DEFAULT TRUE,
	date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	)

2) INSERT INTO users(first_name, last_name, is_employee) VALUES('Luke', 'Skywalker', 'true')
INSERT INTO users(first_name, last_name, is_employee) VALUES('Leia', 'Organa', 'true')
INSERT INTO users(first_name, last_name, is_employee) VALUES('Lando', 'Calrissian', 'false')

3) SELECT * FROM users;

4) SELECT * FROM users
WHERE is_employee = TRUE

5) SELECT * FROM users
ORDER BY date_created DESC;
