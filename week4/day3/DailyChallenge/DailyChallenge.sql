-- PART 1

-- create table Customer
-- 	(
-- 	id serial primary key,
-- 	first_name varchar(50),
-- 	last_name varchar(50) NOT NULL
-- 	);

-- create table Customer_profile 
-- 	(
-- 	id serial primary key,
-- 	isLoggedIn BOOLEAN DEFAULT FALSE,
-- 	customer_id INTEGER references Customer (id)
-- 	)

-- insert into Customer (first_name, last_name)
-- 	values
-- 	('John', 'Doe'),
-- 	('Jerome', 'Lalu'),
-- 	('Lea', 'Rive')

-- insert into Customer_profile (isLoggedIn, customer_id)
-- values 
-- 	(TRUE, (select id from Customer where first_name = 'John')),
-- 	(FALSE, (select id from Customer where first_name = 'Jerome'))

-- select Customer.first_name from Customer, Customer_profile
-- where Customer_profile.IsLoggedIn is TRUE and Customer.id = Customer_profile.customer_id

-- select Customer.first_name, Customer_profile.isLoggedIn from Customer
-- 	left join Customer_profile on Customer.id = Customer_profile.customer_id

-- select count(*) from Customer
-- left join Customer_profile on Customer.id = Customer_profile.customer_id
-- where Customer_profile.IsLoggedIn is not TRUE



-- PART 2
-- create table Book (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(50) NOT NULL,
-- 	author VARCHAR(50) NOT NULL
-- 	)

-- insert into Book (title, author)
-- values
-- 	('Alice In Wonderland', 'Lewis Carroll'),
-- 	('Harry Potter', 'J.K Rowling'),
-- 	('To kill a mockingbird', 'Harper Lee')

-- create table Student
-- 	(
-- 	student_id SERIAL PRIMARY KEY,
-- 	name VARCHAR(50) NOT NULL UNIQUE,
-- 	age INTEGER CHECK(age <= 15)
-- 	)

-- insert into Student (name, age)
-- 	values
-- 	('John', 12),
-- 	('Lera', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14)

-- create table Library (
-- 	book_fk_id INTEGER references Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	student_fk_id INTEGER references Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	borrowed_date DATE,
-- 	PRIMARY KEY (book_fk_id, student_fk_id)
-- 	);

-- insert into Library (book_fk_id, student_fk_id, borrowed_date)
-- values
-- 	((select book_id from Book where title = 'Alice In Wonderland'), (select student_id from Student where name = 'John'), '2022-02-15'),
-- 	((select book_id from Book where title = 'To kill a mockingbird'), (select student_id from Student where name = 'Bob'), '2021-03-03'),
-- 	((select book_id from Book where title = 'Alice In Wonderland'), (select student_id from Student where name = 'Lera'), '2021-05-23'),
-- 	((select book_id from Book where title = 'Harry Potter'), (select student_id from Student where name = 'Bob'), '2021-08-12')

-- select * from Library

-- select Student.name, Book.title from Book, Student, Library
-- where Book.book_id = Library.book_fk_id and Student.student_id = Library.student_fk_id

-- select AVG(age) from Student, Book, Library
-- where Book.book_id = Library.book_fk_id and Student.student_id = Library.student_fk_id
-- and Book.title = 'Alice In Wonderland'

Delete from Student 
where name = 'Bob'