select customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, payment.staff_id
	from customer
	full join payment
	on customer.customer_id = payment.customer_id
	order by payment.staff_id;


