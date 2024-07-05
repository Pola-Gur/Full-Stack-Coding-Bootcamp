-- SELECT * FROM public.language
-- ORDER BY language_id ASC 

-- select language.name, film.title, film.description from language
-- 	join film on language.language_id = film.language_id

-- select language.name, film.title, film.description from language
-- 	left join film on language.language_id = film.language_id

-- create table new_film (
--     id serial PRIMARY KEY,
--     name VARCHAR (50) NOT NULL
-- );

-- insert into new_film (id, name)
-- values (1, 'The Devil wears Prada')

-- create table customer_review (
-- 	review_id serial primary key,
-- 	film_id integer references new_film(id) on delete cascade,
-- 	language_id integer references language(language_id),
-- 	title VARCHAR (50) NOT NULL,
-- 	score integer CHECK (score >=1 AND score <= 10),
-- 	review_text TEXT,
-- 	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

-- insert into customer_review (film_id, title, score, review_text)
-- values (1, 'Best movie for all moods', 10, 'One of the best films I have seen! Incomparable Meryl Streep, charming Anne Hathaway, charming Stanley Tucci, poignant Emily Blunt. A story about being true to yourself, the ability to admit mistakes and return to true desires and dear people')

-- UPDATE customer_review 
-- SET language_id = 1
-- 	WHERE film_id = 1

-- insert into customer_review (title, score, review_text, language_id)
-- values ('Breathtaking Rome', 9, 'A cult film from the great Paolo Sorrentino. Beautiful Rome, beautiful people, thoughts about death and the course of life.', 2)

delete from new_film 
where id = 1