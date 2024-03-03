/*
CREATED BY: Aimal Khan
CREATE DATE: 27/02/2024
DESCRIPTION: Calculate the average invoice amount by BillingCity for WSDA Music Company management?
*/
-- GROUP BY:
SELECT
	BillingCity,
	ROUND(AVG(total), 2) AS "Average Sales"
FROM
	Invoice
GROUP BY
	BillingCity
ORDER BY
	BillingCity
	