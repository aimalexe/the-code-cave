/*
CREATED BY: Aimal Khan
CREATE DATE: 27/02/2024
DESCRIPTION: Determine average invoice totals by billing country and city?
*/

SELECT
	BillingCountry,
	BillingCity,
	ROUND(AVG(total), 2) AS "Average Sales"
FROM
	Invoice
GROUP BY
	BillingCountry,
	BillingCity
ORDER BY
	BillingCountry;
