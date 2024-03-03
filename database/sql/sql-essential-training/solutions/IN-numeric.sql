/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: how many invoices do we have that are exactly $1.98 or $3.96?
*/

SELECT
	InvoiceDate,
	BillingAddress,
	BillingCity,
	total
FROM
	Invoice
WHERE
	total IN(1.98, 3.96)
ORDER by
	InvoiceDate DESC