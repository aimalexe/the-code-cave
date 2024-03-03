/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: How many invoices exist between $1.98 and $5?
*/

SELECT
	InvoiceDate,
	BillingAddress,
	BillingCity,
	total
FROM
	Invoice
WHERE
	total BETWEEN 1.98 AND 5.00
ORDER by
	InvoiceDate DESC