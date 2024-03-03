/*
CREATED BY: Aimal Khan
CREATE DATE: 27/02/2024
DESCRIPTION: Calculate average invoice totals by city for average greater than $5?
*/
-- HAVING:

SELECT
	BillingCity,
	ROUND(AVG(total), 2) AS "Average Sales"
FROM
	Invoice
GROUP BY
	BillingCity
HAVING
	"Average Sales" > 5	
ORDER BY
	BillingCity
