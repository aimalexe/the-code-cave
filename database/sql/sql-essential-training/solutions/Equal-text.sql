/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: how many invoices were billed to the city of Brussels?
*/

SELECT
	InvoiceDate,
	BillingAddress,
	BillingCity,
	total
FROM
	Invoice
WHERE
	BillingCity = 'Brussels'
ORDER by
	InvoiceDate DESC