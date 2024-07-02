select customer.first_name, customer.last_name, payment.amount, payment.payment_date 
	from customer
	inner join payment
	on customer.customer_id= payment.customer_id
	order by customer.customer_id;
select * from inventory;
select * from film;
select film.film_id, film.title
from film
where not exists (
	select 1
	from inventory
	where film.film_id = inventory.film_id
	);
select * from country;
select * from city;
select country.country_id, city.country_id, city.city, country.country
	from city
	full join country
	on country.country_id = city.country_id;
select country.country_id, city.city, country.country
	from city
	full join country
	on country.country_id = city.country_id;
select customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, payment.staff_id
	from customer
	full join payment
	on customer.customer_id = payment.customer_id
	order by payment.staff_id;
SELECT * FROM public.payment
ORDER BY payment_id ASC 
