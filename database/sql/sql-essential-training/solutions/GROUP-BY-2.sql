/*
CREATED BY: Aimal Khan
CREATE DATE: 27/02/2024
DESCRIPTION: Calculate average invoice totals by city for cities starting with "L"?
*/
-- WHERE -> GROUP BY:
SELECT
	BillingCity,
	ROUND(AVG(total), 2) AS "Average Sales"
FROM
	Invoice
WHERE
	BillingCity like "L%"
GROUP BY
	BillingCity
ORDER BY
	BillingCity
	