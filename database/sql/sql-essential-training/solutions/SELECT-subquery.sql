/*
CREATED BY: Aimal Khan
CREATE DATE: 01/03/2024
DESCRIPTION: Identify invoices with totals below the average across all invoices?
*/

SELECT
	BillingCity,
	total
FROM
	Invoice
WHERE
	total < (
		SELECT
			AVG(total)
		FROM
			Invoice
		)
ORDER BY
	BillingCity;

