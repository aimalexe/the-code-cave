/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: Get a list of all invoices that were billed after May 22nd, 2010 and have a total of less than $3?
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
	DATE(InvoiceDate) > '2010-05-22' AND total < 3
ORDER by
	InvoiceDate DESC