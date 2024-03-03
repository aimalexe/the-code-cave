/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: Get a list of all invoices that are greater than $1.98 from any cities whose names start with P or D?
*/

-- using PEMDAS or BEMDAS

SELECT
	InvoiceDate,
	BillingAddress,
	BillingCity,
	total
FROM
	Invoice
WHERE
	total > 1.98 AND (BillingCity LIKE "P%" OR BillingCity LIKE "D%")
ORDER by
	InvoiceDate DESC