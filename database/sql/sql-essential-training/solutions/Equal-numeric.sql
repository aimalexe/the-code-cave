/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: How many customers purchased two songs at 99 cents each?
*/

SELECT
	InvoiceDate,
	BillingAddress,
	BillingCity,
	total
FROM
	Invoice
WHERE
	total = 1.98
ORDER by
	InvoiceDate DESC