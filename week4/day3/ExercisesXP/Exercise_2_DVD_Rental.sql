-- UPDATE film
-- set language_id = 2
-- where film_id = 999

-- drop table customer_review

-- select count (*) as nulls from rental
-- where return_date is NULL

-- select film.title from film, rental, inventory
-- 	where return_date is NULL and  inventory.film_id = film.film_id and inventory.inventory_id = rental.inventory_id
-- limit 30

-- select film.title, film.description from film, actor, film_actor
-- where film.film_id = film_actor.film_id and actor.actor_id = film_actor.actor_id and actor.first_name = 'Penelope'
-- 	and actor.last_name = 'Monroe' and film.description like '%restler%'

-- select title, description from film
-- where length < 60 and rating = 'R' and description like '%Documentary%'

-- select film.title, film.description, customer.first_name, film.replacement_cost, rental.return_date, customer.last_name from film, rental, inventory, customer
-- 	where customer.first_name = 'Matthew' and customer.last_name = 'Mahan' and customer.customer_id = rental.customer_id
-- 	and rental.inventory_id = inventory.inventory_id and inventory.film_id = film.film_id
-- 	and rental.return_date > '2005-07-28%' and rental.return_date < '2005-08-01%' and film.replacement_cost > 4

select film.title, film.description, customer.first_name, film.replacement_cost, customer.last_name from film, rental, inventory, customer
	where customer.first_name = 'Matthew' and customer.last_name = 'Mahan' and customer.customer_id = rental.customer_id
	and rental.inventory_id = inventory.inventory_id and inventory.film_id = film.film_id and (film.title like '%oat%' or film.description like '%oat')
	order by film.replacement_cost desc
