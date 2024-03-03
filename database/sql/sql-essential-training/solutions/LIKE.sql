/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: how many invoices were billed to the cities that start with B?
*/

-- %: wild card. Don't care what comes after

SELECT
	InvoiceDate,
	BillingAddress,
	BillingCity,
	total
FROM
	Invoice
WHERE
	BillingCity LIKE '%B%'
ORDER by
	InvoiceDate DESC