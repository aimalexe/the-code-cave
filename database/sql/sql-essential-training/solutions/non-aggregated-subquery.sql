/*
CREATED BY: Aimal Khan
CREATE DATE: 01/03/2024
DESCRIPTION: identify invoices received after a specified date?
*/
-- Non Aggregated Subquery
SELECT
	InvoiceDate,
	BillingAddress,
	BillingCity	
FROM
	Invoice
WHERE
	InvoiceDate > (
		SELECT
			InvoiceDate
		FROM 
			Invoice
		WHERE
			InvoiceId = 251
	)
ORDER BY
	InvoiceDate

