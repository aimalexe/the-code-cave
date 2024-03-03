/*
CREATED BY: Aimal Khan
CREATE DATE: 01/03/2024
DESCRIPTION: identifying invoices that correspond to three specific invoice dates?
*/
-- Returning multiple records from Subquery

SELECT
	InvoiceDate,
	BillingAddress,
	BillingCity
FROM
	Invoice
WHERE
	InvoiceDate IN (
		SELECT
			InvoiceDate
		FROM
			Invoice
		WHERE
			InvoiceId IN (251, 252, 254)
	)
