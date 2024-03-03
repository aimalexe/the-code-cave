/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: how many invoices were billed on May 22, 2010?
*/

SELECT
	InvoiceDate,
	BillingAddress,
	BillingCity,
	total
FROM
	Invoice
WHERE
	DATE(InvoiceDate) = '2010-05-22'
ORDER by
	InvoiceDate DESC