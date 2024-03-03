/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: how many invoices were billed to Brussels, Orlando, or Paris?
*/

SELECT
	InvoiceDate,
	BillingAddress,
	BillingCity,
	total
FROM
	Invoice
WHERE
	BillingCity IN('Brussels', "Orlando", 'Paris')
ORDER by
	InvoiceDate DESC