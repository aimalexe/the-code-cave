/*
CREATED BY: Aimal Khan
CREATE DATE: 27/02/2024
DESCRIPTION: Find average invoice totals greater than $5 for cities starting with B?
*/
-- WHERE + HAVING:

SELECT
	BillingCity,
	ROUND(AVG(total), 2) AS "Average Sales"
FROM
	Invoice
WHERE
	BillingCity Like "B%"
GROUP BY
	BillingCity
HAVING
	"Average Sales" > 5	
ORDER BY
	BillingCity
